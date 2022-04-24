class Node {
	constructor(key = null, left = null, right = null) {
		this.key = key;
		this.left = left;
		this.right = right;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
		this.res = "";
	}

	insert(key) {
		// 根据Key创建节点
		let newNode = new Node(key);
		// 判断根节点
		if (this.root !== null) {
			// 根节点不为空
			this.insertNode(this.root, newNode);
		} else {
			// 根节点为空
			this.root = newNode;
		}
	}
	/**
	 * 递归函数，用来插入新节点
	 * @param {*} node 对比节点
	 * @param {*} newNode 插入节点
	 */
	insertNode(node, newNode) {
		// 判断节点与新节点值大小
		if (node.key > newNode.key) {
			// 新节点小了
			// 看 node.left 是否为空
			if (node.left === null) {
				// 空就插进去
				node.left = newNode;
			} else {
				// 不空接着与 node.left 进行对比插入
				this.insertNode(node.left, newNode);
			}
		} else {
			// 新节点大了
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	// // 先序遍历
	// preOrderTraversal(handler) {
	// 	let res = "";
	// 	this.preOrderTraversalNode(this.root, res);
	// 	return res;
	// }

	// preOrderTraversalNode(node, res) {
	// 	if (!node === null) {
	// 		res += node.key + " ";
	// 		res = this.preOrderTraversalNode(this.left, res);
	// 		res = this.preOrderTraversalNode(this.right, res);
	// 	}
	// 	return res;
	// }

	// 先序遍历，修改 res 位置
	preOrderTraversal() {
		// 防止被打扰,先把res置空
		this.res = "";
		// 这里的res是为了接收遍历的节点
		this.preOrderTraversalNode(this.root);
		return this.res;
	}

	preOrderTraversalNode(node) {
		if (node != null) {
			this.res += node.key + " ";
			this.preOrderTraversalNode(node.left);
			this.preOrderTraversalNode(node.right);
		}
	}

	// 中序遍历
	midOrderTraversal(handler) {
		// 防止被打扰,先把res置空
		this.res = "";
		// 这里的res是为了接收遍历的节点
		this.res = this.midOrderTraversalNode(this.root);
		return this.res;
	}

	midOrderTraversalNode(node) {
		if (node != null) {
			this.res = this.midOrderTraversalNode(node.left);
			this.res += node.key + " ";
			this.res = this.midOrderTraversalNode(node.right);
		}
		return this.res;
	}

	// 后序遍历
	postOrderTraversal(handler) {
		// 防止被打扰,先把res置空
		this.res = "";
		// 这里的res是为了接收遍历的节点
		this.res = this.postOrderTraversalNode(this.root);
		return this.res;
	}

	postOrderTraversalNode(node) {
		if (node != null) {
			this.res = this.postOrderTraversalNode(node.left);
			this.res = this.postOrderTraversalNode(node.right);
			this.res += node.key + " ";
		}
		return this.res;
	}

	getMin() {
		let node = this.root;
		while (node !== null) {
			node = node.left;
		}
		return node.key;
	}

	getMax() {
		let node = this.root;
		while (node !== null) {
			node = node.right;
		}
		return node.key;
	}

	search(key) {
		return this.searchNode(node, key);
	}
	searchNode(node, key) {
		if (node === null) {
			return false;
		} else {
			if (node.key > key) {
				return this.searchNode(node.left, key);
			} else if (node.key < key) {
				return this.searchNode(node.right, key);
			} else if (node.key === key) {
				return true;
			}
		}
	}

	// while循环版
	search2(key) {
		let node = this.root;
		while (node != null) {
			if (node.key > key) {
				node = node.left;
				continue;
			} else if (node.key < key) {
				node = node.right;
				continue;
			} else if (node.key == key) {
				return true;
			}
		}
		return false;
	}

	// remove
	remove(key) {
		let current = this.root;
		// 因为要删除父节点的左右子树的情况，所以要记录父节点和左右位置的信息。
		let parent = null;
		let isLeftChild = true;

		// 这里需要拿父节点，所以改写了 search 方法，区别主要在于赋值动作都在循环体内。
		while (current.key !== key) {
			parent = current;
			if (current.key > key) {
				isLeftChild = true;
				current = current.left;
				continue;
			} else if (current.key < key) {
				current = current.right;
				continue;
			}
			if (current === null) {
				return false;
			}
		}

		// current 目前指向节点，需要分情况删除
		// 1. 删除叶子节点
		if (current.left === null && current.right === null) {
			if (current === this.root) {
				this.root = null;
			} else if (isLeftChild) {
				parent.left = null;
			} else {
				parent.right = null;
			}
			// 删除的节点只有一个子节点
		} else if (current.right === null) {
			if (current == this.root) {
				this.root = this.root.left;
			} else if (isLeftChild) {
				parent.left = current.left;
			} else {
				parent.right = current.left;
			}
		} else if (current.left == null) {
			// 同理，不赘述
			if ((current = this.root)) {
				this.root = current.right;
			} else if (isLeftChild) {
				parent.left = current.right;
			} else {
				parent.right = current.right;
			}
		} else {
			// 有两个子节点时，找前驱和后继
			// 1.找到后继节点
			let successor = this.getSuccessor1(current);
			// 这里用 getSuccessor2 是处理要删除的节点有两个子节点的情况的。
			// let successor = this.getSuccessor2(current);
			// 判断当前节点是是否为根节点
			if (current == this.root) {
				// 到这里，还有下边的successor.left = current.left
				this.root = current;
			} else if (isLeftChild) {
				parent.left = successor;
			} else {
				parent.right = successor;
			}

			successor.left = current.left;
		}
	}

	// 类似于取最小值
	getSuccessor(delNode) {
		// 用于寻找后继节点
		let successor = delNode;
		// 用于遍历
		let current = delNode.left;
		// 后继节点的父节点，用于删除两节点的第三种情况
		let successorParent = delNode;
		while (current != null) {
			successorParent = successor;
			successor = current;
			current = current.left;
		}

		return successor;
	}

	getSuccessor2(delNode) {
		// 用于寻找后继节点
		let successor = delNode;
		// 用于遍历
		let current = delNode.left;
		// 后继节点的父节点，用于删除两节点的第三种情况
		let successorParent = delNode;
		while (current != null) {
			successorParent = successor;
			successor = current;
			current = current.left;
		}
		if (successor != delNode.right) {
			// 针对情况三，也就是后继节点还有右节点的情况下，需要转移他的右节点到他父节点的左节点上去，如果后继节点是空的话，这步也不影响，详情看图。
			successorParent.left = successor.right;
			// 针对情况2 和3，这步是将删除节点的右子树接到后继节点上，详情看图。
			successor.right = delNode.right;
		}
		return successor;
	}
}

let bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
// console.log(bst.preOrderTraversal());
// console.log(bst.midOrderTraversal());
// console.log(bst.postOrderTraversal());
// console.log(bst.remove(25));
//
