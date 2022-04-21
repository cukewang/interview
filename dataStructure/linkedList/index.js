class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // 1.增
  // 1.1 append 向尾部添加一个新的项
  append(data) {
    // 1. 创建新节点
    let newNode = new Node(data);
    // 2. 判断链表时候没有节点
    if (this.head === null) {
      this.head = newNode;
      this.length++;
    } else {
      // 存在节点的话，新建个指针然后往后倒腾，找到尾节点
      let current = this.head;
      //  尾节点next === null，自动跳出
      while (current.next) {
        current = current.next;
      }
      // 把尾节点给 newNode
      current.next = newNode;
      this.length++;
    }
  }
  // 1.2 insert(position,element) 向链表的特定位置中插入一个新的项
  insert(position, elment) {
    // 非生效情况
    if (position < 0 || position >= this.length) return false;
    // 新建个节点
    let newNode = new Node(element);
    // 插入位置为0
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    // 插入位置不为0
    else {
      let current = this.head;
      let counter = 0;
      while (counter++ !== position) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    // 列表长度++
    length++;
  }
  // 2.删
  // 2.1 removeAt(position) 删除列表中特定的某一项
  removeAt(position) {
    // 不生效情况
    if (position < 0 || position >= this.length) return false;
    // 0的时候
    if (position === 0) {
      this.head = this.head.next;
    } else {
      // 非0
      let preNode = this.head;
      let current = this.head;
      let counter = 0;
      while (counter++ !== position) {
        preNode = current;
        current = current.next;
      }
      preNode.next = current.next;
    }
    // length--
    this.length--;
    return true;
  }
  // 2.2 remove(element) 删除列表中的一项
  remove(element) {
    let current = this.head;
    let preNode = this.head;
    // 为0时，直接替换头指针
    if (current.data === element) {
      this.head = this.head.next;
      this.length--;
      return true;
    } else {
      // 不为0时，往后倒
      while (current && current.data !== element) {
        preNode = current;
        current = current.next;
      }

      if (current === null) {
        return false;
      } else {
        preNode.next = current.next;
        this.length--;
        return true;
      }
    }
  }

  // 3.改
  // 3.1 update(postion，element) 修改摸个位置的元素
  update(position, element) {
    // 非法位置
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let counter = 0;
    while (counter++ < position) {
      current = current.next;
    }
    current.data = element;
    return true;
  }
  // 4.查
  // 4.1 get(position) 获取对应位置的元素
  get(position) {
    // 非法位置
    if (position < 0 || position >= this.length) return false;

    // 合法位置
    let current = this.head;
    let counter = 0;
    while (counter++ < position) {
      current = currernt.next;
    }
    return current.data;
  }
  // 4.2 indexof(element) 返回元素在列表中的索引，如果没有就返回1
  indexof(element) {
    let current = this.head;
    while (current && current.data !== element) {
      current = current.next;
    }
    if (current) {
      return current.data;
    } else {
      return false;
    }
  }

  //  5.其余
  // 5.1 isempty() 如果链表不包含任何元素，返回true，如果链表长度大于0则返回false
  isEmpty() {
    return this.length === 0;
  }
  // 5.2 size() 返回链表包含的元素个数
  size() {
    return this.length;
  }
  // 5.3 tostring() 返回字符串形式的链表
  toString() {
    let current = this.head;
    let returnStr = "";
    while (current) {
      returnStr += current.data + " ";
      current = current.next;
    }
    return returnStr;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let list = new LinkedList();

list.append("1111");
list.append("2222");
list.append("3333");

// console.log(list.remove("3333"));
console.log(list.size());
console.log(list.remove("3333433"));
console.log(list.removeAt(3));
console.log(list.toString());
