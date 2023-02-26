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

//used .flat with degree 1 to flatten array
const flatten = function(arr) {
  let newArr = [];

  newArr = arr.flat(1);
  return newArr;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));// => [1, 2, 3, 4, 5, 6]