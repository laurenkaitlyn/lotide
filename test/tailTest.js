const assert = require('chai').assert;
const _ = require('../index');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    let result = _.tail(['Yo Yo', 'Lighthouse', 'Labs']);
    assert.strictEqual(result[0], 'Lighthouse');
    assert.strictEqual(result[1], 'Labs');
  });

  it("returns ['Lighthouse', 'Students'] for ['Hello', 'Lighthouse' , 'Students']", () => {
    let result = _.tail(['Hello', 'Lighthouse' , 'Students'])
    assert.strictEqual(result[0], 'Lighthouse');
    assert.strictEqual(result[1], 'Students')
  });
  it("returns an empty array for ['hi'], cause no tail", () => {
    assert.strictEqual(_.tail(['hi']).length, 0);
  });
});

