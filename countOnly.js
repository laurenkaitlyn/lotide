const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`Assertion Passed ✅✅✅: ${actual} === ${expected}\n`);
  } else {
    return (`Assertion Failed 🛑🛑🛑: ${actual} !== ${expected}\n`);
  }
};

/*countOnly takes an array and an object 
and returns an object that counts everything 
that was input */

// allItems: array of strings
//itemsToCount: onject specifying what to count

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(
  assertEqual(result1["Jason"], 1),
  assertEqual(result1["Karima"], undefined),
  assertEqual(result1["Fang"], 2),
  assertEqual(result1["Agouhanna"], undefined)
);

module.exports = countOnly;