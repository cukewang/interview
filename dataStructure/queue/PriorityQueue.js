const { Queue } = require("./index");
// 优先级队列的特点：
// 口 我们知道，普通的队列插入一个元素，数据会被放在后端.并且需要前面所有的元素都处理完成后才会处理前面的数据.
// 口 但是优先级队列，在插入一个元素的时候会考虑该数据的优先级.
// 口 和其他数据优先级 进行比较.
// 口 比较完成后，可以得出这个元素在队列中正确的位置
// 口 其他处理方式，和基本队列的处理方式一样.

// 二优先级队列主要考虑的问题：
// 口每个元素不再只是一个数据，而且包含数据的优先级
// 口在添加方式中，根据优先级放入正确的位置.

// 现实中的优先级队列
// 1. 机场登机 老人和小孩，或者商务舱的多
// 2. 医院的急诊室和普通病房

// 优先级队列的封装
// 优先级队列和普通队列的区别仅在于 优先级队列的插入与普通的不同
// 所以可以仅仅通过定义一个插入队列，然后剩下的直接通过extends继承下来就可以了。
class PriorityQueue extends Queue {
  constructor() {
    // 要继承的话必须执行super()方法，因为super是调用原来的父类，将方法和值赋值到this上。
    // 和原先老的es5写法是不一样的，原来的es5是通过原型链来实现的.
    super();
  }
  // 重写emqueue方法就行了
  emqueue(element, priority) {
    let queueElement = new QueueElement(element, priority);
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      let added = false;
      this.items.every((item, index) => {
        if (item.priority < queueElement.priority) {
          this.items.splice(index, 0, queueElement);
          added = true;
          // 这里用every 或者 some 都可以break。
          // break的方法就是 every中用return false
          // some中用return true
          return false;
        }
      });
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
}

// es6 class 没有内部类的概念，所以不推荐用function写在里面这种写法
// 直接在外面写就行，性能高。
// 内部类的写法就是重复的去新建QueueElement，写在里面没有任何意义。
class QueueElement {
  constructor(element, priority) {
    this.elelment = element;
    this.priority = priority;
  }
}

let pq = new PriorityQueue();

pq.emqueue(111, 1);
pq.emqueue(222, 2);
pq.emqueue(333, 0);
// pq.dequeue();
console.log(pq);
