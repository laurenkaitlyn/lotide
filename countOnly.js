
/*countOnly takes an array and an object 
and returns an object that counts everything 
that was input */

// allItems: array of strings
//itemsToCount: object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}

module.exports = countOnly;