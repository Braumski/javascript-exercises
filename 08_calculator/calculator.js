const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((accum, curr) => accum + curr);
};

const multiply = function (array) {
  return array.reduce((accum, curr) => accum * curr);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  const integersBelowNum = [];
  if (num === 0) {
    return 1;
  }
  while (num > 0) {
    integersBelowNum.push(num);
    num--;
  }
  return integersBelowNum.reduce((accum, curr) => accum * curr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
