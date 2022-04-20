const { Stack } = require("./stack");

// 100
// 计算：100/2余数：0
// 计算：50/2余数：0
// 计算：25/2余数：1
// 计算：12/2余数：0
// 计算：6/2余数：0
// 计算：3/2余数：1
// 计算：1/2余数：1
// 从底下到上面：1100100

// 主要是运用队栈的进去再拿出来
// 思路：
// 1.计算主要留下两个有用的数，就是余数和除法的结果。
// 2.结果保存下来接着用
// 3.余数直接放到栈里
// 4.结束条件是当除法结果为0的时候，结束。
// 5.然后把数组捣腾出来组合成字符串就行了

/**
 *
 * @param {*} decNumber 十进制数
 * @returns 二进制字符串
 */
function dec2bin(decNumber) {
  let s1 = new Stack();
  while (decNumber > 0) {
    s1.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }
  return s1.items.reverse().toString().replace(/,/g, "");
}

console.log(dec2bin(100));

/**
 * 自带方法实现十进制转二进制
 */
function dec2binPrimordial(decNumber) {
  return decNumber.toString(2);
}

console.log(dec2binPrimordial(100));

/**
 * 二进制转十进制
 */
function bin2descPrimordial(decNumber) {
  return Number.parseInt(decNumber.toString(10), 2);
}

console.log(bin2descPrimordial(1100100));

/**
 *
 * @param {*} descNumber 转换字符串
 * @param {*} n 字符串为什么进制
 * @param {*} m 想转换为啥进制
 */
function change(descNumber, n, m) {
  return Number.parseInt(descNumber.toString(m), n);
}

console.log(change("0xAF", 16, 10));
