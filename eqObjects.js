
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  obj1Array = Object.keys(object1);
  obj2Array = Object.keys(object2);

  //comparing lengths
  if (obj1Array.length !== obj2Array.length) {
    return false;
  } else {
   
    for (let key of obj1Array) {
      if (Array.isArray(object1[key] && Array.isArray(object2[key]))) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if(!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};


module.exports = eqObjects;