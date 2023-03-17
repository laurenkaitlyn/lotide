const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.equal(tail(["Yo Yo", "Lighthouse", "Labs"]), 'Labs');
  });

  it("returns 'Students' for ['Hello', 'Lighthouse' , 'Students']", () => {
    assert.equal(tail(["Hello", "Lighthouse", "Students"]), 'Students');
  });
});

