// 슬라이딩 윈도우 : 창문(계산할 범위)을 정해놓고 옆으로 밀듯이 구현 => for문을 한 번만 돌면 됨
function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  // 첫 번째 sum
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  // arr[i] : sum에 새로 더할 값, arr[i-k] : sum에서 제외할 값
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}
console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
