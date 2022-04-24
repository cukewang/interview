class HashTable {
	constructor() {
		// 所有元素，用的链地址法
		this.storage = [];
		// 当前数组有多少元素
		this.count = 0;
		// 总长度，后期会扩容，最好一直保持为质数
		this.limit = 7;
	}

	/**
	 *
	 * 哈希函数，通过 key 值来确定一个独特的 Index 索引
	 * @param {*} str 索引值
	 * @param {*} size 哈希表总长度
	 */
	hashFunc(str, size) {
		// hashCOode 变量
		let hashCode = 0;

		// 霍纳算法，计算 hashCode 的值
		for (let index = 0; index < str.length; index++) {
			hashCode = 37 * hashCode + str.charCodeAt(i);
		}

		let index = hashCode % size;
		return index;
	}

	/**
	 * @param {*} key
	 * @param {*} value
	 */
	put(key, value) {
		// 通过哈希函数获取index
		const index = this.hashFunc(key, this.limit);
		// 获取bucket
		const bucket = this.storage[index];
		// 判断 bucket 是否为空，空就创建个数组，然后把值加进去
		if (bucket === null) {
			bucket = [[key, value]];
		}
		// 如果有值，遍历bucket, 看是否能修改
		for (const item of bucket) {
			if (item[0] === key) {
				item[1] = value;
			}
		}
		// 遍历完了不能修改，直接把值插入bucket中
		bucket.push([key, value]);

		// 长度加1
		this.count++;

		// 判断是否需要扩容
		if (this.count > this.limit * 0.75) {
			// 这两部保证新的limit是质数
			let newSize = this.limit * 2;
			let newPrime = this.getPrime(newSize);

			// 在确定newPrime是质数之后，对哈希表进行扩容
			this.resize(newPrime);
		}
	}

	// 获取操作
	get(key) {
		// 通过哈希函数获取index
		const index = this.hashFunc(key, this.limit);
		// 拿bucket
		const bucket = this.storage[index];
		// 判断 bucket
		if (bucket) {
			// 不为空就开找
			for (const iterator of bucket) {
				if (iterator[0] === key) {
					return iterator[1];
				}
			}
		}
		// 空了返回null
		return null;
	}

	// 删除操作
	delet(key) {
		// 通过哈希函数获取index
		const index = this.hashFunc(key, this.limit);

		const bucket = this.storage[index];

		if (bucket) {
			bucket.some((item, i, that) => {
				if (item[0] === key) {
					that.splice(i, 1);
					if (that === []) {
						this.storage.splice(index, 1);
						this.count--;
						return true;
					}
					console.log("删除成功");
					return true;
				}
			});
		}
		console.log("删除失败");
	}

	// 哈希表扩容，当插入元素非常多。在插入的过程中，判断
	resize(newLimit) {
		// 保存老表
		let oldStorage = this.storage;

		// 更新新表数据为空
		this.storage = [];
		this.count = 0;
		// 重新设置表长度
		this.limit = newLimit;

		// 对新表进行插入
		for (const bucket of oldStorage) {
			if (bucket == null) {
				continue;
			}

			for (const tuple of bucket) {
				this.put(tuple[0], tuple[1]);
			}
		}
	}

	// 在扩容之时，保证下次是质数。
	isPrime(num) {
		let tmp = parseInt(Math.sqrt(num));

		for (let i = 2; i < tmp; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
	getPrime(limit) {
		// if (this.isPrime(limit)) {
		//   return limit
		// } else {
		//   return getPrime(limit++)
		// }

		while (!this.isPrime(limit)) {
			num++;
		}
		return num;
	}
}
