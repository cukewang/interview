class Set {
	constructor() {
		// 没有必要用数组，用对象比较方便
		// this.items = []

		// 可以用object对象来表示
		this.items = {};
	}

	// 1.增
	// 1.add(value)
	add(value) {
		// 如果重复了，则返回false
		if (this.has(value)) {
			return false;
		}

		// 添加元素到集合中
		this.items[value] = value;
		return true;
	}

	// 2.删
	// 2.1 remove(value)
	remove(value) {
		// 不能用下标值来删除某些值。
		// 判断集合中是否包含这个元素，如果没有包含，直接return false
		if (!this.has(value)) {
			return false;
		}

		delete this.items[value];
		return true;
	}
	// 2.2 clear()
	clear() {
		this.items = {};
	}

	// 4.查
	// 4.1 has(value) 判断当前集合里是否有那个元素
	has(value) {
		return this.items.hasOwnProperty(value);
	}
	// 4.2 size() 与length类似
	size() {
		return Object.keys(this.items).length;
	}
	// 4.3 values() 返回一个包含集合中所有值的数组
	values() {
		return Object.keys(this.items);
	}

	// 集合间操作
	// 1.并集
	union(otherSet) {
		let tmp = new Set();

		for (let item in this.items) {
			tmp.add(item);
		}

		for (let item in otherSet.items) {
			if (!tmp.has(item)) {
				tmp.add(item);
			}
		}

		return tmp;
	}

	// 2.交集
	intersection(otherSet) {
		let tmp = new Set();
		for (let item in otherSet.items) {
			if (this.has(item)) {
				tmp.add(item);
			}
		}
		return tmp;
	}
	// 3.差集
	difference(otherSet) {
		let tmp = new Set();

		for (let item in this.items) {
			tmp.add(item);
		}
		// let that = this
		for (let item in otherSet.items) {
			if (this.has(item)) {
				tmp.remove(item);
			}
		}
		return tmp;
	}

	// 4.子集
	subset(otherSet) {
		for (let item in otherSet.items) {
			if (!this.has(item)) {
				return false;
			}
		}
		return true;
	}
}

let s = new Set();
console.log(s.add("1111"));
console.log(s.add("1111"));
console.log(s.add("1111"));
console.log(s.add("1111"));
console.log(s.add("1111"));
console.log(s);
