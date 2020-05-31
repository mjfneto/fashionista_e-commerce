export const twoDigits = roundToDigits(2);

export function numStringToNum(val) {
  if (
    typeof val !== 'string' ||
    val.trim() === '' ||
    val.search(/\d/g) === -1
  ) {
    throw new TypeError(
      `parameter is not a valid string, it is ${
        isNaN(val)
          ? 'NaN'
          : isNegZero(val)
          ? 'negative zero'
          : isNull(val)
          ? 'null'
          : typeof val
      }`
    );
  }

  let [numString] = val.match(/[+-]?[\d.,]+/);
  numString = numString.replace(',', '.');

  const num = Number(numString);

  return isNegZero(num) ? 0 : num;
}

export function roundToDigits(x) {
  // tested
  if (typeof x === 'undefined') x = 0;
  if (typeof x === 'string') {
    throw new TypeError('parameter must be a valid number, it is string');
  }

  if (notValidNum(x)) {
    throw new Error(
      `parameter must be a valid number, it is ${
        isNaN(x)
          ? 'NaN'
          : isNegZero(x)
          ? 'negative zero'
          : isNull(x)
          ? 'null'
          : typeof x
      }`
    );
  }

  return function toDigits(y) {
    if (notValidNum(y))
      throw new Error(
        `parameter must be a valid number, it is ${
          isNaN(y)
            ? 'NaN'
            : isNegZero(y)
            ? 'negative zero'
            : isNull(y)
            ? 'null'
            : typeof y
        }`
      );
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

export function isNull(val) {
  return val == undefined && typeof val === 'object';
}
