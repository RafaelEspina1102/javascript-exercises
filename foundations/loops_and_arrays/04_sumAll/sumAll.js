const sumAll = function (firstNumber, secondNumber) {
  if (
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber) ||
    firstNumber < 0 ||
    secondNumber < 0
  ) {
    return "ERROR";
  }
  let total = 0;
  const min = Math.min(firstNumber, secondNumber);
  const max = Math.max(firstNumber, secondNumber);

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
