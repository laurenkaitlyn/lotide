const letterPositions = function(sentence) {
  let results = {};
  //taking away spaces
  sentence = sentence.replace(/\s+/g,'');

  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]] = results[sentence[i]] || [];
    results[sentence[i]].push(i);
  }

  return results;
}

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("These 2 arrays are the same.");
  } else {
    console.log("These 2 strings do not match.");
  }
}

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

assertArrayEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;