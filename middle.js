const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays')


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

  module.exports = middle;