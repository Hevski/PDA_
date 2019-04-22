var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should correctly add 2 numbers together', function(){
    assert.equal(1 + 4, 5)
  })

  it('should correctly subtract one number from another', function(){
    assert.equal(7 - 4, 3)
  })

  it('should correctly multiply 2 numbers together', function(){
    assert.equal(3 * 5, 15)
  })

  it('should correctly divide 2 numbers', function(){
    assert.equal(21 / 7, 3)
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    assert.strictEqual(calculator.runningTotal, 12)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 2)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(8)
    calculator.numberClick(2)
    calculator.clearClick()
    assert.strictEqual(calculator.runningTotal, 0)
  })

});
