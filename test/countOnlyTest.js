
const assert = require('chai').assert;
const _ = require('../index');


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
const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true});

describe("#countOnly", () => {
  it("returns '1' when a name is only repeated once in an array", () => {
    assert.equal(result1["Jason"], 1);
  });

  it("returns 'undefinded' when a name is never listed in an array", () => {
    assert.equal(result1["Karima"], undefined);
  });

  it("returns '2' when a name is repeated twice in an array", () => {
    assert.equal(result1["Fang"], 2);
  });
});

