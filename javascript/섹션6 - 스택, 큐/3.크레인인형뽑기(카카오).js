function solution(boards, moves) {
  let answer = 0;
  let minusMove = moves.map((x) => x - 1); // 열번호 - 1
  let stack = []; // 인형을 담을 바구니

  minusMove.forEach((x) => {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i][x] !== 0) {
        if (stack[stack.length - 1] === boards[i][x]) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(boards[i][x]);
          boards[i][x] = 0;
        }
        break;
      }
    }
  });

  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let move = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, move));
