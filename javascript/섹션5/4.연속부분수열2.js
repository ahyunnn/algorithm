// 투 포인터 알고리즘
function solution(m, arr) {
  let answer = 0;

  // sum이 m을 초과했을 때 하나씩 빼줄 용도
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
