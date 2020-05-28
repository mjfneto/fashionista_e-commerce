export const twoDigits = roundToDigits(2);

export function numStringToNum(val) {
  if (typeof val !== 'string' || val.trim() === '' || val.search(/\d/g) === -1) {
    throw new TypeError('val is not a string');
  }

  let [numString] = val.match(/[+-]?[\d.,]+/);
  numString = numString.replace(',', '.');

  const num = Number(numString);

  return isNegZero(num) ? 0 : num;
}

export function roundToDigits(x) {
  // tested
  if (typeof x === 'undefined') x = 0;
  if (notValidNum(x)) throw new TypeError('x is not a number');

  return function toDigits(y) {
    if (notValidNum(y)) throw new TypeError('y is not a number');
    return Number(y.toFixed(x));
  };
}

// accessory functions

export function notValidNum(val) {
  return typeof val !== 'number' || isNaN(val) || isNegZero(val);
}

export function isNaN(val) {
  return val !== val;
}

export function isNegZero(val) {
  return val === 0 && 1 / val === -Infinity;
}
