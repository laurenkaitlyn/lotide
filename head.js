const assertEqual = require('./assertEqual');

//takes an array and returns the first item in the array - as an element 
const head = function(arr) {
  let firstItem = arr.shift();
  return firstItem
}

module.exports = head;