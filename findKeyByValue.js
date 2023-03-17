
const findKeyByValue = function (object, value) {
  /* returns the first element in the provided by Object.keys 
  that matches the value. 
  If no values satisfy the testing function, undefined is returned. */
  return Object.keys(object).find(key => object[key] === value);
}

module.exports = findKeyByValue;