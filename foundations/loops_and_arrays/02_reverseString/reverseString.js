const reverseString = function (message) {
  let reversedString = "";
  const nonReversedString = message;
  for (let i = nonReversedString.length - 1; i >= 0; i--) {
    reversedString += nonReversedString[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
