function solution(keyinput, board) {
  // 범위
  var garo = Math.floor(board[0] / 2);
  var sero = Math.floor(board[1] / 2);
  //현재 위치
  var now = [0, 0];

  // down과 left의 경우 한칸씩 빼줘야하기 때문에 garo 혹은 sero에 - 기호 붙이기
  for (let x of keyinput) {
    if (x === "up" && now[1] < sero) now[1]++;
    else if (x === "down" && now[1] > -sero) now[1]--;
    else if (x === "left" && now[0] > -garo) now[0]--;
    else if (x === "right" && now[0] < garo) now[0]++;
  }

  console.log(now);
  return now;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
