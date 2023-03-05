const eqObjects = function(object1, object2) {
  // first check if one object has more keys than the other
    obj1Array = Object.keys(object1);
    obj2Array = Object.keys(object2);
  
    //comparing lengths
    if (obj1Array.length !== obj2Array.length) {
      return false
    }
    //loop through the keys comparing the values
    for (let value of obj1Array) {
      if (Array.isArray(object2)) {
        if(!eqArrays(object1[value], object2[value])) {
          return false
        }
    } else if (object1[value] !== object2[value]) {
      return false
    }
  
    return true
    }
  };

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

// FUNCTION IMPLEMENTATION
// takes 2 objects and prints out a message 
const assertObjectsEqual = function(actual, expected) {
  //import the library
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);//true

