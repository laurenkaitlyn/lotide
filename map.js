const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("These 2 arrays are the same.");
  } else {
    console.log("These 2 strings do not match.");
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']));

