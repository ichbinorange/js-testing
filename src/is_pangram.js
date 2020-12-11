const isPangram = function(text) {
  const abcList = 'abcdefghijklmnopqrstuvwxyz';
  let abcObject = {};
  // turn abcList to object
  for (const char of abcList) {
    abcObject[char] = false;
  };

  const textLowerCase = new Set(text.toLowerCase());
  for (const char of textLowerCase) {
    abcObject[char] = true;
  };
  return Object.values(abcObject).every(char => char === true);
};

module.exports = isPangram;
