const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`Assertion Passed ✅✅✅: ${actual} === ${expected}\n`);
  } else {
    return (`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}\n`);
  }
};

const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2), // ensure we get back two elements
  assertEqual(result[0], "Lighthouse"), // ensure first element is "Lighthouse"
  assertEqual(result[1], "Labs")); // ensure second element is "Labs"
