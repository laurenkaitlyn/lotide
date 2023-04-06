const assert = require('chai').assert;
const _ = require('../index');

const shirtObject = {
  colour: "red",
  size: "medium"
};

const anotherShirtObject = {
  size: "medium",
  colour: "red"
};

const longSleeveShirtObject = {
  size: "medium",
  colour: "red",
  sleeveLength: "long"
};

describe("#eqObjects", () => {
  it("returns true if the objects are the exact same", () => {
    assert.deepEqual(_.eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false if the objects are NOT the exact same", () => {
    assert.equal(_.eqObjects(shirtObject, longSleeveShirtObject), false);
  });
});


