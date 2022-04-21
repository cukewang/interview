class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    // 尾节点
    this.tail = null;
    this.length = 0;
  }

  // 1. 增加节点
  append(data) {
    let newNode = new Node(data);
    // length为0时
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 不为0时
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }
  // 2. 增加某位置上的节点
  insert(position, data) {
    //   新建个Node
    let newNode = new Node(data);
    //  非法位置返回 0
    if (position < 0 || position >= this.length) return fasle;
    // 合法位置进行插入
    if (position === 0) {
      // 插入位置在开头时
      newNode.next = this.head;
      //   newNode.prev = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (position === this.length) {
      // 插入位置在结尾时
      newNode.prev = this.tail;
      //   newNode.next = null;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // 先找到位置
      let index = 0;
      let current = this.head;
      // 找到 position 前面的节点
      while (index++ < position - 1) {
        current = current.next;
      }
      // 修改新建节点的前后指向
      newNode.next = current.next;
      newNode.prev = current;
      // 修改新建节点的后节点的prev
      current.next.prev = newNode;
      // 修改新建节点的前节点的next
      current.next = newNode;
    }

    this.length++;
  }

  // 2. 删
  // 2.1 removeAt(position) 删除列表中的特定项
  removeAt(position) {
    // 非法位置,或链表没长度
    if (position < 0 || position >= this.length || this.length === 0)
      return fasle;
    // 合法位置
    if (position === 0) {
      // 0
      this.head.next.prev = null;
      this.head = this.head.next;
    } else if (postition === this.length - 1) {
      // length - 1
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      // 中间位置
      let current = this.head;
      let index = 0;
      while (index < position) {
        current = current.next;
      }
      current.next.prev = current.prev;
      current.prev.next = current.next;
    }
    this.length--;
  }

  // 2.2 remove(element) 删除列表中的某一项
  remove(element) {
    // 先找
    let current = this.head;
    let index = 0;
    // 找到了，删掉
    while (current && current.data !== element) {
      index++;
      current = current.next;
    }
    if (current === null) {
      // 找不到返回false
      return false;
    } else {
      // 位置 0
      if (index == 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (index === this.length - 1) {
        // 位置 length-1
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        // 位置 中间的
        current.next.prev = current.prev;
        current.prev.next = current.next;
      }
      this.length--;
    }
  }

  // 3. 改
  update(position, data) {
    // 非法位置
    if (position < 0 || position >= this.length || this.length === 0)
      return fasle;
    // 合法位置
    let current = this.head;
    let index = 0;
    // 先找
    while (index++ < position) {
      current = current.next;
    }
    current.data = data;
    return true;
  }

  // 4. 查
  get(position) {
    // 非法位置
    if (position < 0 || position >= this.length || this.length === 0)
      return fasle;
    // 合法位置
    let current = this.head;
    let index = 0;
    // 先找
    while (index++ < position) {
      current = current.next;
    }

    return current.data;
  }

  // 4.2 indexof(element) 返回元素在链表中的索引，没有返回-1
  indexof(element) {
    // 先找
    let current = this.head;
    let index = 0;
    while (current && current.data !== element) {
      index++;
      current = current.next;
    }
    if (current) {
      return index;
    } else {
      // 找不到返回-1
      return -1;
    }
  }

  //  5.其余
  // 5.1 isempty() 如果链表不包含任何元素，返回true，如果链表长度大于0则返回false
  // 5.2 size() 返回链表包含的元素个数
  // 5.3 tostring() 返回字符串形式的链表
  toString() {
    return this.backwordString();
  }
  // 5.4 forwardString() 返回正向遍历节点字符串形式
  forwardString() {
    let current = this.tail;
    let resString = "";
    while (current) {
      resString += current.data + "";
      current = current.prev;
    }
    return resString;
  }
  // 5.5 backwordString() 返回反向遍历节点字符串形式
  backwordString() {
    let current = this.head;
    let resString = "";
    while (current) {
      resString += current.data + "";
      current = current.next;
    }
    return resString;
  }
}

let l1 = new DoublyLinkedList();
l1.append("1111");
l1.append("2222");
l1.insert(1, "3333");
// l1.remove("2222");
// l1.remove("1111");
// l1.remove("3333");
// console.log(l1);
console.log(l1.indexof("1111"));
console.log(l1.indexof("2222"));
console.log(l1.indexof("3333"));
