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

  describe('throws division by zero error', () => {
    expect(operate(15, 0, '÷')).toThrow(Error);
  });
});
