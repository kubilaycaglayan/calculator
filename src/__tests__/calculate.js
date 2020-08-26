import operate from '../logic/calculate';

describe('calculate', () => {
  describe('accepts data object and buttonName as parameters', () => {
    const data = {
      total: '10',
      next: '20',
      operate: '',
    };
    const newData = {
      total: '30',
      next: '30',
      operate: '+',
      clear: true,
    };
    const buttonName = '+';
    it('returns the result of the calculation', () => {
      expect(operate(data, buttonName)).toEqual(newData);
    });
  });
});
