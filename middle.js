const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("These 2 arrays are the same.");
  } else {
    console.log("These 2 strings do not match.");
  }
};

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

const middle = function(array) {
  let midArr = [];
  let mid = array[Math.floor((array.length / 2))];
  
  if (array.length <= 2) {
    return midArr
  } else if (array.length % 2 !== 0) {
    midArr.push(array[mid - 1]);
  } else if (array.length % 2 === 0) {
    midArr.push(array[mid - 2]);
    console.log(midArr)
    midArr.push(array[mid - 1]);
    console.log(midArr)
  }
  return midArr;
}

console.log(
  middle([1]), // => []
  middle([1, 2]), // => []
  middle([1, 2, 3]),// => [2]
  middle([1, 2, 3, 4, 5]), // => [3]
  middle([1, 2, 3, 4]), // => [2, 3]
  middle([1, 2, 3, 4, 5, 6])); // => [3, 4]