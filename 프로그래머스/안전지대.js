function solution(board) {
  var len = board.length;
  var answer = len * len;
  var dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  var dy = [1, 1, 1, 0, 0, -1, -1, -1];
  var bomb = [];

  // 지뢰지역 탐색
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        bomb.push([i, j]);
        answer--;
      }
    }
  }

  // 모든 곳이 지뢰인 경우 (예제 3번)
  if (answer === 0) return 0;

  // 위험지역 확인
  // 지뢰가 있는 지역을 기준으로 위, 아래, 오른쪽, 왼쪽, 대각선 확인
  // 0 <= nx, ny < len 조건을 만족하면서 0인 경우에 answer에서 --
  bomb.forEach((area) => {
    for (let k = 0; k < 8; k++) {
      const nx = area[0] + dx[k];
      const ny = area[1] + dy[k];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < len &&
        (ny < len) & (board[nx][ny] === 0)
      ) {
        board[nx][ny] = 1;
        answer--;
      }
    }
  });

  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
