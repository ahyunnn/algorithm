// 큐 구현 코드
class Queue {
  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
  }
  // 큐의 길이
  size() {
    if (this.store[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.rear + 1;
    }
  }

  push(value) {
    if (this.size() === 0) {
      this.store["0"] = value;
    } else {
      this.rear += 1;
      this.store[this.rear] = value;
    }
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front += 1;
      return temp;
    }
  }
}

function bfs(graph, start, visited) {
  const queue = new Queue();
  queue.push(start);
  visited[start] = 1;

  while (queue.size()) {
    const v = queue.popleft();
    console.log(v);

    for (let node of graph[v]) {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = 1;
      }
    }
  }
}

const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]]; // 인접 리스트
const visited = Array(graph.length).fill(0); // 방문 여부 확인 리스트

bfs(graph, 0, visited);
