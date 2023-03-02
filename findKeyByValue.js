const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`Assertion Passed ✅✅✅: ${actual} === ${expected}`);
  } else {
    return (`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  /* returns the first element in the provided by Object.keys 
  that matches the value. 
  If no values satisfy the testing function, undefined is returned. */
  return Object.keys(object).find(key => object[key] === value);
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"), '\n',
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
);