function dfs(graph, start, visited) {
  const stack = []; // stack 정의
  stack.push(start);

  while (stack.length) {
    let v = stack.pop(); // stack의 최상위 값을 꺼내기
    if (!visited[v]) {
      // 방문하지 않았다면 방문처리
      console.log(v);
      visited[v] = 1;

      for (let node of graph[v]) {
        // 꺼낸 값의 자식 노드들을 방문
        if (!visited[node]) {
          // 방문하지 않은 노드라면 stack에 push
          stack.push(node);
        }
      }
    }
  }
}

const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]]; // 인접 리스트
const visited = Array(graph.length).fill(0); // 방문 여부 확인 리스트

dfs(graph, 0, visited);
