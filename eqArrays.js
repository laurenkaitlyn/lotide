const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`Assertion Passed ✅✅✅: ${actual} === ${expected}`);
  } else {
    return (`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

//check if the arrays match by converting to a string
//returns true or false
const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));