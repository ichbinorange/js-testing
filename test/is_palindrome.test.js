const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {
  test('isPalindrome() is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works with a palindrome with only lower case', () => {
    // Arrange
    const text = 'racecar';

    
    // Act + Assert
    expect(isPalindrome(text)).toEqual(true);
  });

  test('returns false for "test"', () => {
    // Arrange
    const text = 'test';

    
    // Act + Assert
    expect(isPalindrome(text)).toEqual(false);
  });

  test('returns true with a palindrome with numbers and symbols', () => {
    // Arrange
    const text = '11/11/11';

    
    // Act + Assert
    expect(isPalindrome(text)).toEqual(true);
  });
});