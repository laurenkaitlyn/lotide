const assertEqual = function(actual, expected) {
  if (actual == expected) {
    return (`Assertion Passed ✅✅✅: ${actual} === ${expected}`);
  } else {
    return (`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

//takes an array and returns the first item in the array - as an element 
const head = function(arr) {
  let firstItem = arr.shift();
  return firstItem
}

console.log(
assertEqual(head([5,6,7]), 5),
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
)

console.log(head([1,2,3]));