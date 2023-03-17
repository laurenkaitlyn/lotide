const assert = require('chai').assert;
const _ = require('../index');

describe("#letterPositions", () => {
  it("returns '1' when looking for the position of 'e' in 'Hello'", () => {
    assert.equal(_.letterPositions("hello").e, '1');
  });

});


// assertArrayEqual(letterPositions("hello").e, [1]);