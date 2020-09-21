const assert = require('chai').assert; 
const tail = require('../tail'); 
let arr = tail([1,2,3])
describe('#tail', () => {
  it('return [2,3] for([1,2,3])', () => {
    assert.strictEqual(arr[0],2);
    assert.strictEqual(arr[1],3);

  })
})