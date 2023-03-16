const eqArrays = require('./eqArrays');

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`[${array1}] and [${array2}] are the same.`);
  }
  if (eqArrays(array1, array2) === false) {
    console.log(`[${array1}] and [${array2}] are NOT the same.`);
  }
}

module.exports = assertArrayEqual;


