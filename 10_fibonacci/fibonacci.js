// create an array that holds the fibonacci nums
// start with 1 in the array
// take that value and add it to previous value
// keep track of position in array until it matches the inputted num (the position of the fibonacci num)

const fibonacci = function (paramNum) {
  const num = Number(paramNum);
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num < 0) {
    return "OOPS";
  }
  const array = [1, 1];
  for (let i = 2; i < num; i++) {
    // i = position in the array
    array.push(array[i - 2] + array[i - 1]);
  }
  return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
