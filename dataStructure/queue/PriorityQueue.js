const { Queue } = require("./index");
class PriorityQueue extends Queue {
  constructor() {
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
          return false;
        }
      });
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
}

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
