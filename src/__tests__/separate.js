import separate from '../helpers/separate';

describe('', () => {
  const num1 = '123456789';
  const num2 = '123456789.00';
  const num3 = '-123456789.00';

  it('inserts thousand seperators to a given string', () => {
    expect(separate(num1)).toBe('123,456,789');
  });

  it('does not change the decimals', () => {
    expect(separate(num2)).toBe('123,456,789.00');
  });

  it('does not change the sign', () => {
    expect(separate(num3)).toBe('-123,456,789.00');
  });
});
