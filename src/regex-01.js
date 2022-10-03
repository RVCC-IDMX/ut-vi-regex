/* eslint-disable prefer-regex-literals */
/*
 * regex-01.js
 * Language: javascript
 * Test: tests/regex-01.test.js
 * Path: src/regex-01.js
 *
 *
 */

/**
 * Tests the string against a regular expression.
 * @param {string} str - the string to be tested
 * @param {regex} re - the regular expression to be tested
 * @returns {boolean} - true if the string matches the regular expression,
 * false otherwise
 * ? example: testString('abc', /abc/) // true
 * ? example: testString('abc', /def/) // false
 */
function testString(str, re) {
  // write your code here & return value
}

/**
 * Tests the string for a match against an array of strings.
 * @param {string} str - the string to be tested
 * @param {Array} arr - an array of strings to be tested
 * @returns {boolean} - true if the string matches one of the strings in the array,
 * false otherwise
 * ?example: testStringOr('abc', ['abc', 'def', 'ghi']) // true
 * ?example: testStringOr('abc', ['def', 'ghi']) // false
 * ? must create a regular expression using the constructor function new RegExp()
 * ? https://mzl.la/3lWGpRa
 * ? hint: create a string with the join array method and the | character as the separator
 * ? The '|' character acts like the OR operator 
 */
function testStringOr(str, arr) {
  // write your code here & return value
}

/**
 * Tests the string for a match and ignore case.
 * @param {string} str - the string to test
 * @param {string} match -  the regular expression to be tested
 * @returns {boolean} - true if the string matches the regular expression,
 * false otherwise
 *
 * ? example: testStringIgnoreCase('ABC', 'a') // true
 * ? must create a regular expression using the constructor function new RegExp()
 */
function testStringIgnoreCase(str, match) {
  // write your code here & return value
}

/**
 * Counts the number of times any vowel appears in the given string.
 * @param {string} str - the string to test
 * @returns {number} - the number of times any vowel appears in the string
 * ? Vowels aeiou can be upper or lower case
 * ? must use the match() string method - https://mzl.la/2Wfk0ps
 * ? example: countVowels('abcdef') => 2
 * ? example: countVowels('the boy is lost in the woods, HELP US!') => 10
 */
function countVowels(str) {
  // write your code here & return value
}

/**
 * Replaces all vowels with a passed character
 * @param {string} str - the string
 * @param {string} ch a character to replace vowels
 * @returns {string} - the string with vowels replaced by ch
 * ? example: replaceVowels('abcdef', '*') => '*bcd*f'
 * ? replace single vowels and vowel digraphs (like ee, ea, oo) with a single character
 * ? example: replaceVowels('the sound is sweet', '#') => 'th# s#nd #s sw#t'
 * ? must use the replace() string method - https://mzl.la/2Zsw4F6
 */
function replaceVowels(str, ch) {
  // write your code here & return value
}

/**
 * Tests (ignore case) the string for a given prefix that starts the string.
 * @param {string} str - the string to test for the prefix
 * @param {string} prefix - the prefix to test
 * @returns {boolean} - true if the string starts with the prefix, false otherwise
 * ? example: startsWith('bibliophile', 'biblio')  => true
 * ? example: startsWith('library', 'biblio')  => false
 * ? must create a regular expression using the constructor function new RegExp()
 */
function isPrefix(str, prefix) {
  // write your code here & return value
}

module.exports = {
  testString,
  testStringOr,
  testStringIgnoreCase,
  countVowels,
  replaceVowels,
  isPrefix,
};
