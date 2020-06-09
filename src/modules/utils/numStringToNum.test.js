import { numStringToNum } from '.';

describe('numStringToNum', () => {
  it('is a function with an arity of 1', () => {
    expect(numStringToNum instanceof Function).toBeTruthy();
    expect(numStringToNum.length).toBe(1);
  });

  it('expects a string (not empty and containing at least one digit) as parameter', () => {
    expect(() => numStringToNum('string')).toThrowError(TypeError);
    expect(() => numStringToNum('string12')).not.toThrowError(TypeError);
    expect(() => numStringToNum('')).toThrowError(TypeError);
    expect(() => numStringToNum({})).toThrowError(TypeError);
    expect(() => numStringToNum(NaN)).toThrowError(
      'parameter is not a valid string, it is NaN'
    );
    expect(() => numStringToNum(-0)).toThrowError(
      'parameter is not a valid string, it is negative zero'
    );
    expect(() => numStringToNum(null)).toThrowError(
      'parameter is not a valid string, it is null'
    );
    expect(() => numStringToNum(undefined)).toThrowError(
      'parameter is not a valid string, it is undefined'
    );
  });

  it('outputs first occurrence of +/- decimal/integer in string', () => {
    expect(numStringToNum('R$.5asdadR$5.50')).toEqual(0.5);
    expect(numStringToNum('R$ 500.')).toEqual(500);
    expect(numStringToNum('R$ 500.')).toEqual(500);
    expect(numStringToNum('R$ -500.')).toEqual(-500);
    expect(numStringToNum('R$ -.5')).toEqual(-0.5);
    expect(numStringToNum('R$ -.0')).toEqual(0);
    expect(numStringToNum('R$ 149,90')).toEqual(149.9);
  });
});
