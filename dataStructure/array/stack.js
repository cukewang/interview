/**
 * 基于Array封装一个栈
 */
function Stack() {
  this.items = [];
}
// 原型要放在外面，这样不会重复执行。
// 实测放在外面新建五个对象平均0.05ms。放在外面要0.15ms

// 入栈
Stack.prototype.push = function (params) {
  this.items.push(params);
};

// 出栈
Stack.prototype.pop = function () {
  return this.items.pop();
};

// 查看栈顶元素
Stack.prototype.peek = function () {
  return this.items[this.items.length - 1];
};

// 判断栈是否为空
Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
};

// 获取栈中元素个数
Stack.prototype.size = function () {
  return this.items.length;
};
// toString()
Stack.prototype.toString = function () {
  return this.items.reduce((pre, cur) => pre + " " + cur);
};

// let s1 = new Stack();
// s1.push(111);
// s1.push(222);
// // s1.pop();
// console.log(s1.toString());
exports.Stack = Stack;
