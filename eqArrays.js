const eqArrays = function(arr1, arr2) {
  let results = true;

  if (arr1.length !== arr2.length) false;

  for (let index = 0; index < arr1.length; index ++) {
    if (Array.isArray(arr1[index])) && (Array.isArray(arr2[index])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



module.exports = eqArrays;