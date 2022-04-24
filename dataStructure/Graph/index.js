class Graph {
	constructor() {
		this.vertexes = new Array();
		this.edges = new Map();
	}
	// 加点
	addVertex(v) {
		this.vertexes.push(v);
		this.edges.set(v, []);
	}
	// 加边
	addEdge(v1, v2) {
		this.edges.get(v1).push(v2);
		this.edges.get(v2).push(v1);
	}
	// 打印
	toString() {
		let res = "";
		for (const vertexe of this.vertexes) {
			res += vertexe + " -> ";
			for (const edeg of this.edges.get(vertexe)) {
				res += edeg + " ";
			}
			res += "\n";
		}
		return res;
	}

	bfs(initV) {
		// 初始化颜色
		let colors = this.initializeColor();
		let queue = [];
		queue.push(initV);
		while (queue.length > 0) {
			// 取出队头
			let v = queue.shift();
			// 找队头相邻接点
			let list = this.edges.get(v);
			// 遍历相邻接点
			for (const v2 of list) {
				// 相邻接点是白的话让他们入队,并给他们变成灰色的
				if (colors[v2] === "white") {
					colors[v2].color = "grey";
					queue.push(v2);
				}
			}
			// 结果累加
			res += v + " ";
			colors[v] = "black";
		}
		return res;
	}
	// 初始化节点颜色
	initializeColor() {
		let colors = [];
		for (const vertexe of this.vertexes) {
			colors[vertexe] = "white";
		}

		return colors;
	}

	dfs(initV) {
		let colors = this.initializeColor();
		this.res = "";
		this.dfsVisit(initV, colors);
		return this.res;
	}

	dfsVisit(v, colors) {
		colors[v] = "gray";
		this.res += v;
		let vlist = this.edges.get(v);
		for (const vitem of vlist) {
			if (colors[vitem] == "white") {
				this.dfsVisit(vitem, colors);
			}
		}
		colors[v] = "black";
	}
}

let graph = new Graph();

// 添加顶点
let myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (const vertexe of myVertexes) {
	graph.addVertex(vertexe);
}

// 添加边
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());
