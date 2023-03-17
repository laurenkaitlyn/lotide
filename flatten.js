
//used .flat with degree 1 to flatten array
const flatten = function(arr) {
  let newArr = [];

  newArr = arr.flat(1);
  return newArr;
};

module.exports = flatten;