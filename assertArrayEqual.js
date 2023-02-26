const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("These 2 arrays are the same.");
  } else {
    console.log("These 2 strings do not match.");
  }
}

