import operate from '../logic/calculate';

describe('calculate', () => {
  describe('accepts data object and buttonName as parameters', () => {
    const data = {
      total: 10,
      next: 20,
      operate: '',
    };
    const buttonName = '+';
    it('returns the result of the calculation', () => {
      expect(operate(data, buttonName)).toBe('30');
    });
  });
});
