function dfs(graph, v, visited) {
  // 현재 노드 방문 처리
  visited[v] = 1;
  console.log(v);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
}

const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]]; // 인접 리스트
const visited = Array(graph.length).fill(0); // 방문 여부 확인 리스트

dfs(graph, 0, visited);
