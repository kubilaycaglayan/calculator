import convert from '../helpers/convert';

describe('converts objects into readable strings', () => {
  const stateObject1 = {
    total: null,
    next: null,
    operate: null,
  };

  const stateObject1Result = {
    total: '',
    next: '0',
    operate: '',
  };

  const stateObject2 = {
    total: '123456',
    next: '456789',
    operate: '+',
  };

  const stateObject2Result = {
    total: '123,456',
    next: '456,789',
    operate: '+',
  };

  const stateObject3 = {
    total: '',
    next: 'error: error occured',
    operate: '+',
  };

  const stateObject3Result = {
    total: '',
    next: 'error: error occured',
    operate: '+',
  };

  it('returns empty strings instead of null', () => {
    expect(convert(stateObject1)).toEqual(stateObject1Result);
  });

  it('inserts thousand seperators if the given object properties contain strings', () => {
    expect(convert(stateObject2)).toEqual(stateObject2Result);
  });

  it('does not change the error message', () => {
    expect(convert(stateObject3)).toEqual(stateObject3Result);
  });
});
