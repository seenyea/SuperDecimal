
import SuperDecimal from './index.js';
const assert = require('assert');


describe('SuperDecimal', function() {
  describe('#pow()', function() {
    
    it('pow test case #1 [2.5 ^ 3 = 15.625]', function() {
      const sd = new SuperDecimal('2.5');
      assert.equal(sd.pow(3).result, '15.625');
    });

    it('pow test case #2 [-2.5 ^ 3 = -15.625]', function() {
        const sd = new SuperDecimal('-2.5');
        assert.equal(sd.pow(3).result, '-15.625');
    });

    it('pow test case #3 [-2.5 ^ 4 = 39.0625]', function() {
        const sd = new SuperDecimal('-2.5');
        assert.equal(sd.pow(4).result, '39.0625');
    });

    it('pow test case #4 [-1 ^ 3 = -1]', function() {
        const sd = new SuperDecimal('-1');
        assert.equal(sd.pow(3).result, '-1');
    });

    it('pow test case #5 [-1 ^ 4 = 1]', function() {
        const sd = new SuperDecimal('-1');
        assert.equal(sd.pow(4).result, '1');
    });

    it('pow test case #6 [-1 ^ 0 = 1]', function() {
        const sd = new SuperDecimal('-1');
        assert.equal(sd.pow(0).result, '1');
    });

    it('pow test case #7 [0.5 ^ 0 = 1]', function() {
        const sd = new SuperDecimal('0.5');
        assert.equal(sd.pow(0).result, '1');
    });

    it('pow test case #8 [0.5 ^ 2 = 0.25]', function() {
        const sd = new SuperDecimal('0.5');
        assert.equal(sd.pow(2).result, '0.25');
    });

    it('pow test case #9 [-0.5 ^ 2 = 0.25]', function() {
        const sd = new SuperDecimal('-0.5');
        assert.equal(sd.pow(2).result, '0.25');
    });

    it('pow test case #10 [-0.5 ^ 3 = -0.125]', function() {
        const sd = new SuperDecimal('-0.5');
        assert.equal(sd.pow(3).result, '-0.125');
    });

    it('pow test case #11 [-0.5 ^ 4 = 0.0625]', function() {
        const sd = new SuperDecimal('-0.5');
        assert.equal(sd.pow(4).result, '0.0625');
    });

  });

  describe('#mutiply()', function() {
    
    it('mutiply test case #1 [2.5 * 1.2 = 3]', function() {
      const sd1 = new SuperDecimal('2.5');
      const sd2 = new SuperDecimal('1.2');
      assert.equal(sd1.mutiply(sd2).result, '3');
    });

    it('mutiply test case #2 [-2.5 * 1.2 = -3]', function() {
        const sd1 = new SuperDecimal('-2.5');
        const sd2 = new SuperDecimal('1.2');
        assert.equal(sd1.mutiply(sd2).result, '-3');
    });

    it('mutiply test case #3 [-2.5 * 1.2 = 0.50]', function() {
        const sd1 = new SuperDecimal('-2.5');
        const sd2 = new SuperDecimal('0.2');
        assert.equal(sd1.mutiply(sd2).result, '-0.5');
    });

    it('mutiply test case #4 [-0.7 * -0.8 = 0.56]', function() {
        const sd1 = new SuperDecimal('-0.7');
        const sd2 = new SuperDecimal('-0.8');
        assert.equal(sd1.mutiply(sd2).result, '0.56');
    });

    it('mutiply test case #5 [-1 * 1 = -1]', function() {
        const sd1 = new SuperDecimal('-1');
        const sd2 = new SuperDecimal('1');
        assert.equal(sd1.mutiply(sd2).result, '-1');
    });
  });

  describe('#divide()', function() {
    
    it('divide test case #1 [1 / 2 = 0.5]', function() {
      const sd1 = new SuperDecimal('1');
      const sd2 = new SuperDecimal('2');
      assert.equal(sd1.divide(sd2).result, '0.5');
    });

    it('divide test case #2 [1 / 3 = 0.3333333333333333333333333333333]', function() {
        const sd1 = new SuperDecimal('1');
        const sd2 = new SuperDecimal('3');
        assert.equal(sd1.divide(sd2).result, '0.3333333333333333333333333333333');
    });

    it('divide test case #3 [2.5 / 2 = 1.25]', function() {
        const sd1 = new SuperDecimal('2.5');
        const sd2 = new SuperDecimal('2');
        assert.equal(sd1.divide(sd2).result, '1.25');
    });

    it('divide test case #4 [0 / 0.2 = 0]', function() {
        const sd1 = new SuperDecimal('0');
        const sd2 = new SuperDecimal('0.2');
        assert.equal(sd1.divide(sd2).result, '0');
    });

    it('divide test case #5 [2.4 / 0.2 = 12]', function() {
        const sd1 = new SuperDecimal('2.4');
        const sd2 = new SuperDecimal('0.2');
        assert.equal(sd1.divide(sd2).result, '12');
    });

    it('divide test case #6 [2.4 / 1 = 2.4]', function() {
        const sd1 = new SuperDecimal('2.4');
        const sd2 = new SuperDecimal('1');
        assert.equal(sd1.divide(sd2).result, '2.4');
    });

    it('divide test case #6 [4.8 / 2.4 = 2]', function() {
        const sd1 = new SuperDecimal('4.8');
        const sd2 = new SuperDecimal('2.4');
        assert.equal(sd1.divide(sd2).result, '2');
    });

    it('divide test case #7 [0 / 2.4 = 0]', function() {
        const sd1 = new SuperDecimal('0');
        const sd2 = new SuperDecimal('2.4');
        assert.equal(sd1.divide(sd2).result, '0');
    });

  });

  describe('#tostr()', function() {
    it(`tostr test case #1 new SuperDecimal('2.3456').tostr === '2.3456'`, function() {
        const num = '2.3456';
        const sd1 = new SuperDecimal(num);
        assert.equal(sd1.tostr(), num);
    });

    it(`tostr test case #1 new SuperDecimal('0.0000').tostr === '0'`, function() {
        const num = '0.0000';
        const sd1 = new SuperDecimal(num);
        assert.equal(sd1.tostr(), '0');
    });
  });

});