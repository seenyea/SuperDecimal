import {tostr, convert2Str, IsNumeric} from "uitls";

function SuperDecimal(numeric) {
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

export const pow = (x, y) => {

    const num1 = new SuperDecimal(x);
    const num2 = new SuperDecimal(y);
    
    const index = num2.isNegtive ? num2.bigint * 1n : num2.bigint

    const d = num1.bigint ** index;
    const decimal = BigInt(num1.decimal) * index;




}