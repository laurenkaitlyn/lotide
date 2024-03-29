const assert = require('chai').assert;
const _ = require('../index');

describe("#middle", () => {
  it("returns [] for []", () => {
    assert.equal(_.middle([]), '');
  });

  it("returns [] for [1, 2]", () => {
    assert.equal(_.middle([1, 2]), ''); 
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.equal(_.middle([1, 2, 3]), '2'); 
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.equal(_.middle([1, 2, 3, 4, 5]), '3'); 
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.equal(_.middle([1, 2, 3, 4]), '2,3'); 
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.equal(_.middle([1, 2, 3, 4, 5, 6]), '3,4'); 
  });
});
