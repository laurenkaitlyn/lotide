const assert = require('chai').assert;
const _ = require('../index');

describe("#tail", () => {
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.equal(_.tail(["Yo Yo", "Lighthouse", "Labs"]), 'Labs');
  });

  it("returns 'Students' for ['Hello', 'Lighthouse' , 'Students']", () => {
    assert.equal(_.tail(["Hello", "Lighthouse", "Students"]), 'Students');
  });
});

