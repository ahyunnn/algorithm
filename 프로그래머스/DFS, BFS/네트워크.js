function solution(n, computers) {
  // visited : 방문 여부 표시할 리스트
  let visited = Array(n).fill(0);
  let answer = 0;

  // dfs 함수 정의
  function dfs(i) {
    visited[i] = 1; // 먼저 방문처리
    for (let j = 0; j < computers.length; j++) {
      // 간선이 있으면서 방문한 적이 없으면
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  // dfs 함수에 대입할 식
  // dfs를 통해서 연결된 모든 값들을 돌고 나옴 - 방문을 하지 않은 노드들만 방문하고  answer++
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log(solution(n, computers));
