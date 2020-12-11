const isPalindrome = function (text) {
  let endIndex = text.length - 1;
  let frontIndex = 0;
  while (frontIndex < text.length/2) {
    if (text[frontIndex] != text[endIndex]) {
      return false;
      break
    }
    else {
      endIndex -= 1;
      frontIndex += 1;
    };
  };
  return true;
};

module.exports = isPalindrome;

