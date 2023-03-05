const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

const assertEquals = function(actual, expected) {
  if (actual === expected) {
    return (`Assertion Passed ✅✅✅: ${actual} === ${expected}`);
  } else {
    return (`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
// first check if one object has more keys than the other
  obj1Array = Object.keys(object1);
  obj2Array = Object.keys(object2);

  //comparing lengths
  if (obj1Array.length !== obj2Array.length) {
    return false
  }
  //loop through the keys comparing the values
  for (let key of obj1Array) {
    if (!obj2Array.includes(key)) {
      return false
  }

  return true
  }
}
//first round of testing with primitives
const shirtObject = {
  colour: "red",
  size: "medium"
};

const anotherShirtObject = {
  size: "medium",
  colour: "red"
};

const longSleeveShirtObject = {
  size: "medium",
  colour: "red",
  sleeveLength: "long"
};

console.log(
  assertEquals(eqObjects(shirtObject, anotherShirtObject), true), '\n',
  assertEquals(eqObjects(shirtObject, longSleeveShirtObject), false), '\n'
);

//second round of testing with arrays
const multiColourShirtObject = {
  colours: ["red", "blue"],
  size: "medium"
};

const anotherMultiColourShirtObject = {
  size: "medium",
  colours: ["red", "blue"]
};

const longSleeveMultiColourObject = {
  size: "medium",
  colours: ["red", "blue"],
  sleeveLength: "long"
};

console.log(
  eqObjects(multiColourShirtObject, anotherMultiColourShirtObject),
  eqObjects(multiColourShirtObject, longSleeveMultiColourObject),
)
//assert equal
console.log(
  assertEquals(eqObjects(multiColourShirtObject, anotherMultiColourShirtObject), true),
  assertEquals(eqObjects(multiColourShirtObject, longSleeveMultiColourObject), false)
);