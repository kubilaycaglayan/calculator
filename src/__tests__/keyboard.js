import handleButtons from '../events/keyboard';

describe('if a relevant button is pressed it callbacks with the buttonName argument', () => {
  let result;
  const allowedButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-'];

  const mappedButtons = {
    Enter: '=',
    '/': '÷',
    '*': 'X',
    ',': '.',
    Backspace: 'AC',
  };

  const event = {
    preventDefault: () => 'Default event is prevented.',
  };

  const cb = jest.fn(buttonName => { result = `${buttonName} pressed.`; });

  it('callbacks, when an allowed button pressed', () => {
    allowedButtons.forEach(button => {
      event.key = button;
      handleButtons(event, cb);
      expect(result).toBe(`${button} pressed.`);
    });
  });

  it('callbacks, mapped versions of the buttons pressed', () => {
    Object.entries(mappedButtons).forEach(pairs => {
      [event.key, event.mapped] = pairs;
      handleButtons(event, cb);
      expect(result).toBe(`${event.mapped} pressed.`);
    });
  });
});
