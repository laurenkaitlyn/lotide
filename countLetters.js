const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  let letterCount = {};
  // take out spaces
  sentence = sentence.replace(/\s+/g,'');

  for (letter of sentence) {
    if (letterCount[letter]) {
      letterCount[letter] ++;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
}

console.log(countLetters("Hello World"));
//convert to primitive vaues to verify they are the same
console.log(assertEqual(JSON.stringify(countLetters("Hello World")),JSON.stringify(countLetters("Hello World"))));

module.exports = countLetters;

