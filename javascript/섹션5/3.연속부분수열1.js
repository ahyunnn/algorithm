// 투 포인터 알고리즘
function solution(m, arr) {
  let answer = 0;
  let lt = 0; // left pointer : 한칸씩 이동하면서 해당 값을 빼주는 역할
  let sum = 0; //

  // right pointer : 한칸씩 이동하면서 해당 값을 더해주는 역할
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    // 만약 sum과 m값이 같으면 -> 조건을 만족
    if (sum === m) answer++;
    // sum >= m이면 -> 조건을 만족하지 못함
    while (sum >= m) {
      // 더해진 가장 첫 번째 값을 빼준다.
      // 계속 누적해서 이어간다!
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
