const repeatString = function (message, repeat) {
  let repeatedMessage = "";
  if (repeat < 0) return "ERROR";

  for (let i = 0; i < repeat; i++) {
    repeatedMessage += message;
  }
  return repeatedMessage;
};

// Do not edit below this line
module.exports = repeatString;
