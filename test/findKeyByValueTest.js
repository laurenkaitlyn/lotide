const assert = require('chai').assert;
const _ = require('../index');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns key: 'drama' when given value: 'The Wire' ", () => {
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it("returns 'undefined' when a value not in the object is input", () => {
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
