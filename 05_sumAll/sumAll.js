const sumAll = function (num1, num2) {
  let returnSum = 0;
  let minNum = 0;
  let maxNum = 0;

  // Error handling
  if (minNum < 0
    || typeof minNum !== "number"
    || typeof maxNum !== "number") {
    return "ERROR"
  }

  // Determining which number is min and which is max
  if (num1 < num2) {
    minNum = num1;
    maxNum = num2;
  } else if (num2 < num1) {
    minNum = num2;
    maxNum = num1;
  } else if (num1 === num2) {
    return num1 + num2;
  }

  // Executing the function
  for (let i = minNum; i <= maxNum; i++) {
    returnSum += minNum;
    minNum++;
  }
  return returnSum;
};

// Do not edit below this line
module.exports = sumAll;
