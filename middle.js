
const middle = function(array) {
  let midArr = [];
  let mid = array[Math.floor((array.length / 2))];
  
  //for arrays with 1 or 2 elements return empty array
  if (array.length <= 2) {
    return midArr
  }
  //for arrays with odd numbers of elements an array with 1 middle element is returned
  if (array.length % 2 !== 0) {
    midArr.push(array[mid - 1]);
  }
  //for arrays with even numbers return an array with the 2 middle elements
  if (array.length % 2 === 0) {
    midArr.push(array[mid - 2], array[mid - 1]);
  }
  return midArr;
}

  module.exports = middle;