const takeUntil = function(array, callback) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return"These 2 arrays are the same.";
  } else {
    return"These 2 strings do not match.";
  }
}

console.log(
  ' ',assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]), '\n ',
  assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])
);

module.exports = takeUntil;