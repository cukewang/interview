class Queue {
  constructor() {
    this.items = [];
  }
  /**
   * 入队
   * @param {*} element 入队元素
   */
  emqueue(element) {
    this.items.push(element);
  }

  /**
   * 出队
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * 尾元素是啥
   */
  front() {}

  /**
   * 是否为空
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 队列长
   */
  size() {
    return this.items.length;
  }

  /**
   * toString
   */
  toString() {
    return this.items.reduce((pre, cur) => pre + " " + cur);
  }
}

// console.time("global");
// let queue = new Queue();
// console.timeEnd("global");
// queue.emqueue(10);
// queue.emqueue(20);
// queue.emqueue(30);
// queue.dequeue();
// console.log(queue);

exports.Queue = Queue;
