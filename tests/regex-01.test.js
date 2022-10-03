const {
  testString,
  testStringOr,
  testStringIgnoreCase,
  countVowels,
  replaceVowels,
  isPrefix,
} = require('../src/regex-01');

test('testString', () => {
  expect(testString('Hello, World!', /Hello/)).toBe(true);
  expect(testString('Hello, World!', /World/)).toBe(true);
  expect(testString('Hello, World!', /Goodbye/)).toBe(false);
});

test('testStringOr', () => {
  const sampleArray = ['dog', 'cat', 'bird', 'fish'];
  let sampleString = 'Charlie has a pet dog named Snoopy.';
  expect(testStringOr(sampleString, sampleArray)).toBe(true);
  sampleString = 'John has a pet cat named Garfield.';
  expect(testStringOr(sampleString, sampleArray)).toBe(true);
  sampleString = 'Granny has a pet bird called Tweety.';
  expect(testStringOr(sampleString, sampleArray)).toBe(true);
  sampleString = 'Peppa has a pet fish named Goldie.';
  expect(testStringOr(sampleString, sampleArray)).toBe(true);
  sampleString = 'Daria has a pet rock named Igneous.';
  expect(testStringOr(sampleString, sampleArray)).toBe(false);
});

test('testStringIgnoreCase', () => {
  expect(testStringIgnoreCase('Hello, World!', 'hello')).toBe(true);
  expect(testStringIgnoreCase('Hello, World!', 'world')).toBe(true);
  expect(testStringIgnoreCase('Hello, World!', 'WOrlD')).toBe(true);
  expect(testStringIgnoreCase('Hello, World!', 'goodbye')).toBe(false);
});

test('countVowels', () => {
  expect(countVowels('Hello, World!')).toBe(3);
  const sampleStr = `It matters not what someone is born, but what they grow to be.`;
  expect(countVowels(sampleStr)).toBe(17);
});

test('replaceVowels', () => {
  expect(replaceVowels('Hello, World!', '*')).toBe('H*ll*, W*rld!');
  expect(replaceVowels('Loop the street please', '#')).toBe(
    'L#p th# str#t pl#s#'
  );
});

test('isPrefix', () => {
  expect(isPrefix('Hello, World!', 'Hello')).toBe(true);
  expect(isPrefix('Hello, World!', 'World')).toBe(false);
});
