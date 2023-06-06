function bfs(graph, start, visited) {
  const queue = [];
  queue.push(start);
  visited[start] = 1;

  while (queue.length > 0) {
    let v = queue.shift();
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
