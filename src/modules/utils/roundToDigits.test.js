import { roundToDigits } from '.';

// roundToDigits (higher order function) -> return toDigits

describe('roundToDigits', () => {
  it('is a function', () => {
    expect(roundToDigits instanceof Function).toBeTruthy();
  });

  it("expects a valid number or treats 'undefined' as 0)", () => {
    expect(() => roundToDigits()).not.toThrowError();
    expect(() => roundToDigits(0)).not.toThrowError();
    expect(() => roundToDigits('string')).toThrowError(
      'parameter must be a valid number, it is string'
    );
    expect(() => roundToDigits(NaN)).toThrowError(
      'parameter must be a valid number, it is NaN'
    );
    expect(() => roundToDigits(-0)).toThrowError(
      'parameter must be a valid number, it is negative zero'
    );
    expect(() => roundToDigits(null)).toThrowError(
      'parameter must be a valid number, it is null'
    );
  });

  it('when given a valid number, returns a function', () => {
    expect(roundToDigits(2) instanceof Function).toBeTruthy();
    expect(roundToDigits(2.722222222) instanceof Function).toBeTruthy();
  });
});

describe('toDigits', () => {
  it('expects a valid (not NaN or -0) number as parameter', () => {
    expect(roundToDigits(2)).toThrowError();
    expect(() => roundToDigits(2)('string')).toThrowError(
      'parameter must be a valid number, it is string'
    );
    expect(() => roundToDigits(2)(NaN)).toThrowError(
      'parameter must be a valid number, it is NaN'
    );
    expect(() => roundToDigits(2)(-0)).toThrowError(
      'parameter must be a valid number, it is negative zero'
    );
    expect(() => roundToDigits(2)(null)).toThrowError(
      'parameter must be a valid number, it is null'
    );
    expect(() => roundToDigits(2)(undefined)).toThrowError(
      'parameter must be a valid number, it is undefined'
    );
  });

  it('expects +/- integer/decimal as output', () => {
    expect(roundToDigits(2)(2.72222222)).toEqual(2.72);
    expect(roundToDigits(5)(2.72222222)).toEqual(2.72222);
    expect(roundToDigits(10)(2.7002)).toEqual(2.7002);
    expect(roundToDigits(0)(2.7002)).toEqual(3);
    expect(roundToDigits(3)(-2.87)).toEqual(-2.87);
  });
});
