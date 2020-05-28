import { roundToDigits } from '.';

// roundToDigits (higher order function) -> return toDigits

describe('roundToDigits', () => {
  it('is a function', () => {
    expect(roundToDigits instanceof Function).toBeTruthy();
  });

  it("expects a valid number or treats 'undefined' as 0)", () => {
    expect(() => roundToDigits()).not.toThrowError('x is not a number');
    expect(() => roundToDigits(0)).not.toThrowError('x is not a number');
    expect(() => roundToDigits('string')).toThrowError('x is not a number');
    expect(() => roundToDigits(NaN)).toThrowError('x is not a number');
    expect(() => roundToDigits(-0)).toThrowError('x is not a number');
  });

  it('when given a valid number, returns a function', () => {
    expect(roundToDigits(2) instanceof Function).toBeTruthy();
    expect(roundToDigits(2.722222222) instanceof Function).toBeTruthy();
  });
});

describe('toDigits', () => {
  it('expects a valid (not NaN or -0) number as parameter', () => {
    expect(roundToDigits(2)).toThrowError('y is not a number');
    expect(() => roundToDigits(2)('string')).toThrowError('y is not a number');
    expect(() => roundToDigits(2)(NaN)).toThrowError('y is not a number');
    expect(() => roundToDigits(2)(-0)).toThrowError('y is not a number');
  });

  it('expects y characters after the decimal dot as output', () => {
    expect(roundToDigits(2)(2.72222222).split('.')[1]).toHaveLength(2);
    expect(roundToDigits(5)(2.72222222).split('.')[1]).toHaveLength(5);
    expect(roundToDigits(10)(2.7002).split('.')[1]).toHaveLength(10);
    expect(roundToDigits(0)(2.7002).split('.')[1]).toEqual(undefined);
  });
});
