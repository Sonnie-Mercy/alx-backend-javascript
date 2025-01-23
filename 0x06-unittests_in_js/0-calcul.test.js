const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calculateNumber function', function () {
  it('calculateNumber should retrun rounded positive sum', function () {
    assert.strictEqual(calculateNumber(2, 5), 7);
    assert.strictEqual(calculateNumber(6.1, 6.1), 12);
    assert.strictEqual(calculateNumber(5.9, 1.1), 7);
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    assert.strictEqual(calculateNumber(0.8, 0.1), 1);
  });
  it('calculateNumber should retrun rounded negative sum', function () {
    assert.strictEqual(calculateNumber(-2, -3), -5);
    assert.strictEqual(calculateNumber(-4.1, -4.2), -8);
    assert.strictEqual(calculateNumber(-1.6, -4.2), -6);
    assert.strictEqual(calculateNumber(-0.2, -0.1), -0);
    assert.strictEqual(calculateNumber(-0.8, -0.1), -1);
  });
  it('calculateNumber should retrun typeof number', function () {
    assert.equal(typeof calculateNumber(3, 4), 'number');
  });
});
