const assert = require('chai').assert;
const _ = require('../index');

describe("#flatten", () => {
  it("returns '[1,2,3,4,5,6]' for '[1, 2, [3, 4], 5, [6]]'", () => {
    assert.equal(_.flatten([1, 2, [3, 4], 5, [6]]), '1,2,3,4,5,6');
  });
});

