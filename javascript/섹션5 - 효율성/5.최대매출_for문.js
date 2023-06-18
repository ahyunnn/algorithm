// 이중 for문이기 때문에 시간복잡도 상에서 좋지 않음
function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  let check = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
      check += 1;
    }

    answer = Math.max(answer, sum);
    sum = 0;
    check = 0;
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
