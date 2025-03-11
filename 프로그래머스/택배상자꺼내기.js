// 최종 코드
function solution(n, w, num) {
  let answer = 0;
  let height = Math.floor(n / w) + 1;
  let number = 1;
  let storage = [];

  // 전체 storage에 한 줄씩 추가하기
  for (let i = 0; i < height; i++) {
    let small = [];
    for (let j = 0; j < w; j++) {
      if (number <= n) {
        small.push(number);
        number++;
      } else {
        small.push(0);
      }
    }

    if (i % 2 === 0) {
      storage.push(small);
    } else {
      storage.push(small.reverse());
    }
  }

  // storage를 탐색하면서 num찾기
  // 찾은 경우 인덱스 번호를 기준으로 몇 칸 내려가야하는지 알기
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < w; c++) {
      if (storage[r][c] === num) {
        let check = r;
        while (check < height && storage[check][c]) {
          answer += 1;
          check++;
        }
      }
    }
  }

  return answer;
}
