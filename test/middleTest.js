const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.equal(middle([1, 1, 1, 2,12, 3]), [1,2]);
  });
});