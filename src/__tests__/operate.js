import operate from '../logic/operate';

describe('operate', () => {
  describe('performs basic math operations and return results as strings', () => {
    const num1 = 15;
    const num2 = 5;
    it('addition', () => {
      expect(operate(num1, num2, '+')).toBe('20');
    });
    it('subtraction', () => {
      expect(operate(num1, num2, '-')).toBe('10');
    });
    it('multiplication', () => {
      expect(operate(num1, num2, 'X')).toBe('75');
    });
    it('division', () => {
      expect(operate(num1, num2, '÷')).toBe('3');
    });
  });

  it('throws division by zero error', () => {
    expect(() => {
      operate(15, 0, '÷');
    }).toThrow(Error);
  });

  it('reverses the sign', () => {
    expect(operate(0, 15, '+/-')).toBe('-15');
    expect(operate(0, -15, '+/-')).toBe('15');
  });

  it('reverses the sign of \'next\'', () => {
    expect(operate(0, 15, '+/-')).toBe('-15');
    expect(operate(0, -15, '+/-')).toBe('15');
  });

  it('divides \'next\' to a hundred', () => {
    expect(operate(0, 150, '%')).toBe('1.5');
  });
});
