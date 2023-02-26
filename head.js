const assertEqual = function(actual, expected) {
  if (actual == expected) {
    return (`Assertion Passed ✅✅✅: ${actual} === ${expected}`);
  } else {
    return (`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

//takes an array and returns the first item in the array - as an element 
const head = function(arr) {
  let firstItem = arr.splice(1);
  return arr
}

console.log(
assertEqual(head([5,6,7]), 5),
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
)

console.log(head([1,2,3]));