const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("These 2 arrays are the same.");
  } else {
    console.log("These 2 strings do not match.");
  }
};

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

//return new array with elemnts from source that aren't included in itemsToRemove
const without = function(source, itemsToRemove) {
  let newArray = [];
  newArray = source.filter((item) => !itemsToRemove.includes(item));
  return newArray;
};

console.log(
  without([1, 2, 3], [1]), // => [2, 3]
  without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);