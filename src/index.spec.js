import SuperDecimal from './index.js';
const assert = require('assert');


describe('SuperDecimal', function () {


    describe('#add()', function () {
        it('add test case #1 [2 + 3.45 = 5.45]', function () {
            const sd1 = new SuperDecimal('2');
            const sd2 = new SuperDecimal('3.45');
            assert.equal(sd1.add(sd2).result, '5.45');
        });

        it('add test case #2 [0 + 3.45 = 3.45]', function () {
            const sd1 = new SuperDecimal('0');
            const sd2 = new SuperDecimal('3.45');
            assert.equal(sd1.add(sd2).result, '3.45');
        });

        it('add test case #3 [3.45 + (-3.45) = 0]', function () {
            const sd1 = new SuperDecimal('3.45');
            const sd2 = new SuperDecimal('-3.45');
            assert.equal(sd1.add(sd2).result, '0');
        });

        it('add test case #4 [0 + (-3.45) = -3.45]', function () {
            const sd1 = new SuperDecimal('0');
            const sd2 = new SuperDecimal('-3.45');
            assert.equal(sd1.add(sd2).result, '-3.45');
        });

    });

    describe('#sub()', function () {

        it('sub test case #1 [0 - (-3.45) = 3.45]', function () {
            const sd1 = new SuperDecimal('0');
            const sd2 = new SuperDecimal('-3.45');
            assert.equal(sd1.sub(sd2).result, '3.45');
        });

        it('sub test case #2 [2 - 0 = 2]', function () {
            const sd1 = new SuperDecimal('2');
            const sd2 = new SuperDecimal('0');
            assert.equal(sd1.sub(sd2).result, '2');
        });

        it('sub test case #3 [2 - 0.01 = 1.99]', function () {
            const sd1 = new SuperDecimal('2');
            const sd2 = new SuperDecimal('0.01');
            assert.equal(sd1.sub(sd2).result, '1.99');
        });

        it('sub test case #4 [-2 - (-0.01) = -1.99]', function () {
            const sd1 = new SuperDecimal('-2');
            const sd2 = new SuperDecimal('-0.01');
            assert.equal(sd1.sub(sd2).result, '-1.99');
        });

        it('sub test case #5 [2 - 1 = 1]', function () {
            const sd1 = new SuperDecimal('2');
            const sd2 = new SuperDecimal('1');
            assert.equal(sd1.sub(sd2).result, '1');
        });

        it('sub test case #6 [4.8889 - 1.2 = 3.6889]', function () {
            const sd1 = new SuperDecimal('4.8889');
            const sd2 = new SuperDecimal('1.2');
            assert.equal(sd1.sub(sd2).result, '3.6889');
        });

    });


    describe('#pow()', function () {

        it('pow test case #1 [2.5 ^ 3 = 15.625]', function () {
            const sd = new SuperDecimal('2.5');
            assert.equal(sd.pow(3).result, '15.625');
        });

        it('pow test case #2 [-2.5 ^ 3 = -15.625]', function () {
            const sd = new SuperDecimal('-2.5');
            assert.equal(sd.pow(3).result, '-15.625');
        });

        it('pow test case #3 [-2.5 ^ 4 = 39.0625]', function () {
            const sd = new SuperDecimal('-2.5');
            assert.equal(sd.pow(4).result, '39.0625');
        });

        it('pow test case #4 [-1 ^ 3 = -1]', function () {
            const sd = new SuperDecimal('-1');
            assert.equal(sd.pow(3).result, '-1');
        });

        it('pow test case #5 [-1 ^ 4 = 1]', function () {
            const sd = new SuperDecimal('-1');
            assert.equal(sd.pow(4).result, '1');
        });

        it('pow test case #6 [-1 ^ 0 = 1]', function () {
            const sd = new SuperDecimal('-1');
            assert.equal(sd.pow(0).result, '1');
        });

        it('pow test case #7 [0.5 ^ 0 = 1]', function () {
            const sd = new SuperDecimal('0.5');
            assert.equal(sd.pow(0).result, '1');
        });

        it('pow test case #8 [0.5 ^ 2 = 0.25]', function () {
            const sd = new SuperDecimal('0.5');
            assert.equal(sd.pow(2).result, '0.25');
        });

        it('pow test case #9 [-0.5 ^ 2 = 0.25]', function () {
            const sd = new SuperDecimal('-0.5');
            assert.equal(sd.pow(2).result, '0.25');
        });

        it('pow test case #10 [-0.5 ^ 3 = -0.125]', function () {
            const sd = new SuperDecimal('-0.5');
            assert.equal(sd.pow(3).result, '-0.125');
        });

        it('pow test case #11 [-0.5 ^ 4 = 0.0625]', function () {
            const sd = new SuperDecimal('-0.5');
            assert.equal(sd.pow(4).result, '0.0625');
        });

        it('pow test case #11 [0.5 ^ -4 = 16]', function () {
            const sd = new SuperDecimal('0.5');
            assert.equal(sd.pow(-4).result, '16');
        });

        it('pow test case #11 [0.3 ^ -4 = 123.45679]', function () {
            const sd = new SuperDecimal('0.3');
            assert.equal(sd.pow(-4).toFixed(6), '123.456790');
        });
        

    });

    describe('#mutiply()', function () {

        it('mutiply test case #1 [2.5 * 1.2 = 3]', function () {
            const sd1 = new SuperDecimal('2.5');
            const sd2 = new SuperDecimal('1.2');
            assert.equal(sd1.mutiply(sd2).result, '3');
        });

        it('mutiply test case #2 [-2.5 * 1.2 = -3]', function () {
            const sd1 = new SuperDecimal('-2.5');
            const sd2 = new SuperDecimal('1.2');
            assert.equal(sd1.mutiply(sd2).result, '-3');
        });

        it('mutiply test case #3 [-2.5 * 1.2 = 0.50]', function () {
            const sd1 = new SuperDecimal('-2.5');
            const sd2 = new SuperDecimal('0.2');
            assert.equal(sd1.mutiply(sd2).result, '-0.5');
        });

        it('mutiply test case #4 [-0.7 * -0.8 = 0.56]', function () {
            const sd1 = new SuperDecimal('-0.7');
            const sd2 = new SuperDecimal('-0.8');
            assert.equal(sd1.mutiply(sd2).result, '0.56');
        });

        it('mutiply test case #5 [-1 * 1 = -1]', function () {
            const sd1 = new SuperDecimal('-1');
            const sd2 = new SuperDecimal('1');
            assert.equal(sd1.mutiply(sd2).result, '-1');
        });
    });

    describe('#divide()', function () {

        it('divide test case #1 [1 / 2 = 0.5]', function () {
            const sd1 = new SuperDecimal('1');
            const sd2 = new SuperDecimal('2');
            assert.equal(sd1.divide(sd2).result, '0.5');
        });

        it('divide test case #2 [1 / 3 = 0.3333333333333333333333333333333]', function () {
            const sd1 = new SuperDecimal('1');
            const sd2 = new SuperDecimal('3');
            assert.equal(sd1.divide(sd2).result, '0.3333333333333333333333333333333');
        });

        it('divide test case #3 [2.5 / 2 = 1.25]', function () {
            const sd1 = new SuperDecimal('2.5');
            const sd2 = new SuperDecimal('2');
            assert.equal(sd1.divide(sd2).result, '1.25');
        });

        it('divide test case #4 [0 / 0.2 = 0]', function () {
            const sd1 = new SuperDecimal('0');
            const sd2 = new SuperDecimal('0.2');
            assert.equal(sd1.divide(sd2).result, '0');
        });

        it('divide test case #5 [2.4 / 0.2 = 12]', function () {
            const sd1 = new SuperDecimal('2.4');
            const sd2 = new SuperDecimal('0.2');
            assert.equal(sd1.divide(sd2).result, '12');
        });

        it('divide test case #6 [2.4 / 1 = 2.4]', function () {
            const sd1 = new SuperDecimal('2.4');
            const sd2 = new SuperDecimal('1');
            assert.equal(sd1.divide(sd2).result, '2.4');
        });

        it('divide test case #6 [4.8 / 2.4 = 2]', function () {
            const sd1 = new SuperDecimal('4.8');
            const sd2 = new SuperDecimal('2.4');
            assert.equal(sd1.divide(sd2).result, '2');
        });

        it('divide test case #7 [0 / 2.4 = 0]', function () {
            const sd1 = new SuperDecimal('0');
            const sd2 = new SuperDecimal('2.4');
            assert.equal(sd1.divide(sd2).result, '0');
        });

    });

    describe('#tostr()', function () {
        it(`tostr test case #1 new SuperDecimal('2.3456').tostr === '2.3456'`, function () {
            const num = '2.3456';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.tostr(), num);
        });

        it(`tostr test case #1 new SuperDecimal('0.0000').tostr === '0'`, function () {
            const num = '0.0000';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.tostr(), '0');
        });
    });

    describe('#toFixed)', function () {
        it(`toFixed test case #1 new SuperDecimal('2.3456').toFixed(1) === '2.3'`, function () {
            const num = '2.3456';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(1), '2.3');
        });

        it(`toFixed test case #2 new SuperDecimal('2.3456').toFixed(2) === '2.35'`, function () {
            const num = '2.3456';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(2), '2.35');
        });

        it(`toFixed test case #3 new SuperDecimal('2.3456').toFixed(3) === '2.346'`, function () {
            const num = '2.3456';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(3), '2.346');
        });

        it(`toFixed test case #4 new SuperDecimal('2.3456').toFixed(4) === '2.3456'`, function () {
            const num = '2.3456';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(4), '2.3456');
        });

        it(`toFixed test case #5 new SuperDecimal('2.3456').toFixed(5) === '2.34560'`, function () {
            const num = '2.3456';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(5), '2.34560');
        });

        it(`toFixed test case #6 new SuperDecimal('2').toFixed(1) === '2.0'`, function () {
            const num = '2';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(1), '2.0');
        });

        it(`toFixed test case #7 new SuperDecimal('2').toFixed(2) === '2.00'`, function () {
            const num = '2';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(2), '2.00');
        });

        it(`toFixed test case #8 new SuperDecimal('0.999').toFixed(1) === '1.0'`, function () {
            const num = '0.999';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(1), '1.0');
        });

        it(`toFixed test case #9 new SuperDecimal('0.999').toFixed(2) === '1.00'`, function () {
            const num = '0.999';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(2), '1.00');
        });

        it(`toFixed test case #10 new SuperDecimal('0.999').toFixed(3) === '0.999'`, function () {
            const num = '0.999';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(3), '0.999');
        });

        it(`toFixed test case #10 new SuperDecimal('-0.999').toFixed(3) === '-1.00'`, function () {
            const num = '-0.999';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(2), '-1.00');
        });

        it(`toFixed test case #10 new SuperDecimal('-0.999').toFixed(3) === '-0.999'`, function () {
            const num = '-0.999';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(3), '-0.999');
        });

        it(`toFixed test case #10 new SuperDecimal('123.4567901234567901234567901234567').toFixed(1) === '123.5'`, function () {
            const num = '123.4567901234567901234567901234567';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(1), '123.5');
        });

        it(`toFixed test case #10 new SuperDecimal('123.4567901234567901234567901234567').toFixed(2) === '123.46'`, function () {
            const num = '123.4567901234567901234567901234567';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(2), '123.46');
        });

        it(`toFixed test case #10 new SuperDecimal('123.4567901234567901234567901234567').toFixed(3) === '123.457'`, function () {
            const num = '123.4567901234567901234567901234567';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(3), '123.457');
        });

        it(`toFixed test case #10 new SuperDecimal('123.4567901234567901234567901234567').toFixed(4) === '123.4568'`, function () {
            const num = '123.4567901234567901234567901234567';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(4), '123.4568');
        });

        it(`toFixed test case #10 new SuperDecimal('123.4567901234567901234567901234567').toFixed(5) === '123.45679'`, function () {
            const num = '123.4567901234567901234567901234567';
            const sd1 = new SuperDecimal(num);
            assert.equal(sd1.toFixed(5), '123.45679');
        });

        it(`toFixed test case #10 new SuperDecimal('123.4567901234567901234567901234567').toFixed(6) === '123.456790'`, function () {
            const num = '123.4567901234567901234567901234567';
            const sd1 = new SuperDecimal(num);
            const result = sd1.toFixed(6);
            assert.equal(result, '123.456790');
        });

        it(`toFixed test case #10 new SuperDecimal('123.4567901234567901234567901234567').toFixed(7) === '123.4567901'`, function () {
            const num = '123.4567901234567901234567901234567';
            const sd1 = new SuperDecimal(num);
            const result = sd1.toFixed(7);
            assert.equal(result, '123.4567901');
        });

        it(`toFixed test case #10 new SuperDecimal('123.4567901234567901234567901234567').toFixed(8) === '123.45679012'`, function () {
            const num = '123.4567901234567901234567901234567';
            const sd1 = new SuperDecimal(num);
            const result = sd1.toFixed(8);
            assert.equal(result, '123.45679012');
        });
        
        it(`toFixed test case #10 new SuperDecimal('123').toFixed(8) === '123.00000000'`, function () {
            const num = '123';
            const sd1 = new SuperDecimal(num);
            const result = sd1.toFixed(8);
            assert.equal(result, '123.00000000');
        });
    });

});