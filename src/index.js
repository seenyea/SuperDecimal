/**
 * @see module:uitls
 */
import { convert2Str, IsNumeric, decimalPlace, tostr, assembleNumber } from './util';

/**
 * SuperDecimal类使用JavsScript中的BigInt（ES2017中的一个新的特性），去解决大数字的计算，以及由于浮点数字的标准数字引起的计算精准度的问题{@link http://c.biancheng.net/view/314.html|详情可以参考IEEE-754}
 */
class SuperDecimal {
  /**
   * 用来控制默认的小数点的位数
   * @static
   */
  static DIVIDE_DECIMAL_PLACE = 30;

  /**
   * SuperDecimal类的构造函数
   * @param {(string|number)} numeric - 数字型的参数
   */
  constructor(numeric) {
    const num = convert2Str(numeric);
    if (!IsNumeric(num)) {
      throw (new Error(`[input ${numeric}] is not an numerical type, please check it.`))
    }

    let [ints, decis] = String(num).split(".").concat("");
    /** 
     * 整数部分
     * @type {string}
     * @access public */
    this.integer = ints;
    /** 
     * 整数部分字符长度
     * @access public 
     * @type {number}
     * */
    this.inteLens = ints.length;
    /** 
     * 小数部分
     * @type {string}
     * @access public 
     * */
    this.decimal = decis;
    /** 
     * 小数部分字符长度
     * @type {number}
     * @access public */
    this.decimalLen = decis.length;
    /** 
     * 数字的正负性
     * @type {boolean}
     * @access public */
    this.isNegtive = /^\-/.test(num);
    /** 
     * 数字的BigInt的表示
     * @type {BigInt}
     * @access public */
    this.bigint = BigInt(ints + decis);
    /**
     * 数字的字符形式
     * @type {string}
     * @access public */
    this.result = tostr(this.bigint, this.decimalLen);
  }

  /**
   * 两个数字相加
   * @param {SuperDecimal} addtion - 加数
   * @returns {SuperDecimal}
   */
  add(addtion) {
    const sameDeciaml = Math.max(this.decimalLen, addtion.decimalLen);
    let add1 = assembleNumber(this, sameDeciaml);
    let add2 = assembleNumber(addtion, sameDeciaml);

    let res = (add1.bigint + add2.bigint).toString();
    res = tostr(res, sameDeciaml);
    return new SuperDecimal(res);
  }

  /**
   * 两个数字相减
   * @param {SuperDecimal} substraction - 减数
   * @returns {SuperDecimal}
   */
  sub(substraction) {
    const sameDeciaml = Math.max(this.decimalLen, substraction.decimalLen);
    let sub1 = assembleNumber(this, sameDeciaml);
    let sub2 = assembleNumber(substraction, sameDeciaml);

    let res = (sub1.bigint - sub2.bigint).toString();
    res = tostr(res, sameDeciaml);
    return new SuperDecimal(res);
  }

  /**
   * 当前SuperDecimal乘以另一个SuperDecimal
   * @param {SuperDecimal} base 
   * @returns {SuperDecimal}
   */
  mutiply(base) {
    let result = this.bigint * base.bigint;
    result = tostr(result, this.decimalLen + base.decimalLen);
    return new SuperDecimal(result);
  }

  /**
   * 当前SuperDecimal除以另一个SuperDecimal
   * @param {SuperDecimal} divisor - 除数
   * @returns {SuperDecimal}
   */
  divide(divisor) {
    const {
      DIVIDE_DECIMAL_PLACE
    } = SuperDecimal;
    const sameDeciaml = Math.max(this.decimalLen, divisor.decimalLen);
    let up = assembleNumber(this, sameDeciaml);
    let down = assembleNumber(divisor, sameDeciaml);

    up = up.bigint * decimalPlace(DIVIDE_DECIMAL_PLACE + 2); //这里加2的目的是为了让小数后面的31有效数字，保证在30的数字可以做四舍五入
    down = down.bigint;
    let res = (up / down).toString();
    res = tostr(res, DIVIDE_DECIMAL_PLACE + 1); //保留31数字，为了进行30位有效数字的四舍五入
    return new SuperDecimal(res);
  }

  /**
   * 计算幂函数，这里为了保障结果的精准性，将会尽可能保证小数的位数
   * @param {number} n - 当前数字的幂函数
   * @returns {SuperDecimal} - 当前数字的幂函数的结果
   */
  pow(n) {
    const _n = new SuperDecimal(n);
    const decimalLen = n * this.decimalLen;
    let result = tostr(this.bigint ** _n.bigint, decimalLen);
    return new SuperDecimal(result);
  }

  /**
   * 把当前的SuperDecimal的数字转化成数字的字符串输出
   * @returns {string}
   */
  tostr() {
    return tostr(this.bigint, this.decimalLen);
  }

  /**
   * 以字符的形式输出decimal小数位的字符
   * @param {number} decimal - 保留小数的位数
   * @returns {string}
   */
  toFixed(decimal = 10) {
    const {
      result
    } = this;
    let [ints, decis] = String(result).split(".").concat("");
    const l = decis.length;

    if (!l) { //整数处理方式
      return `${ints}.${''.padEnd(decimal, '0')}`
    }

    let res = decis.substr(0, decimal);
    let round = decis.substr(decimal, 1);
    round = round || 0; //如果整个位数小于输出的位数
    let newNum = new SuperDecimal(`${ints}.${res}`);

    if (round >= 5) { //四舍五入
      const sign = this.isNegtive ? '-' : '';
      let one = `${sign}0.${'1'.padStart(decimal, '0')}`;
      one = new SuperDecimal(one);
      newNum = newNum.add(one);
    }

    if (newNum.decimalLen) { //有小数的处理方式
      if (decimal <= newNum.decimalLen)
        return newNum.result;
      return newNum.result.padEnd(newNum.result.length + decimal - newNum.decimalLen, '0');
    }

    return `${newNum.integer}.${''.padEnd(decimal, '0')}`
  }
};

export default SuperDecimal;