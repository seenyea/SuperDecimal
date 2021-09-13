import SuperDecimal from './index.js';

/**
 * 移除字符前后的所有的空格字符
 * @param {strig|number} num - 数字型的参数
 * @returns string 移除字符前后的所有的空格字符
 * 
 * @example
 * 例1: convert2Str(' 2.3')
 * // returns '2.3'
 * 
 * @example
 * 例2: convert2Str('2.3 ')
 * // returns '2.3'
 * 
 * @example
 * 例3: convert2Str(' 2.3 ')
 * // returns '2.3'
 */
export const convert2Str = num => {
    return num.toString().trim();
}

/**
 * 判断输入的字符是否为数字型
 * @param {string} str - 需要判定的字符串
 * @returns {boolean} - 是否为数字型
 */
export const IsNumeric = str => {
    return /^(\-{0,1}|\+{0,1})\d*\.{0,1}\d+$/.test(str);
}

/**
 * 返回一个1开头的n个0的字符，用来做为小数计算用
 * @param {number} n - 保留小数位数
 * @returns {string} - 保留小数位数的除数
 */
export const decimalPlace = (n) => {
    const divisor = BigInt('1'.padEnd(n, '0'));
    return divisor;
}

/**
 * 把给定数字的，按照给定小数位输出
 * @param {BigInt} num - 指定的数字
 * @param {number} decimalLen - 指定的保留小数位数
 * @returns {string} - 保留小数的字符
 * 
 *  * @example
 * 例 num = new , decimalLen = 5,
 * // returns new SuperDecimal(110000n);
 */
export const tostr = (num, decimalLen) => {
    let isNegtive = num < 0n;
    let sign = isNegtive ? '-' : '';
    let result = num.toString();
    result = result.replace(/\-/, '');
    const lens = result.length;
    const inteLens = lens - decimalLen;
    const inte = inteLens > 0 ? result.slice(0, inteLens) : '0';
    let deci = inteLens >= 0 ? result.slice(inteLens, lens) : result.padStart(decimalLen, '0');
    deci = deci.replace(/0*$/, ''); //这里为了处理多个0结尾的问题，例如5.0000 => 5, 3.30 => 3.3
    if (deci) return `${sign}${inte}.${deci}`;
    return `${sign}${inte}`;
}

/**
 * 把除数和被除数都转成同一个小数的整数，便于计算
 * @param {SuperDecimal} num 
 * @param {number} decimalLen 
 * @returns {SuperDecimal}
 * 
 * @example
 * 例 num = 11n, decimalLen = 5,
 * // returns new SuperDecimal(110000n);
 */
export const assembleNumber = (num, decimalLen) => {
    if (decimalLen === num.decimalLen) return num; //只对小数位数少的进行更新
    const {
        inteLens,
        bigint
    } = num;
    let _num = bigint.toString();
    _num = _num.padEnd(decimalLen + inteLens, '0');
    return new SuperDecimal(_num);
}