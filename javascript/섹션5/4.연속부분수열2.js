// 투 포인터 알고리즘
function solution(m, arr) {
  let answer = 0;

  // sum이 m을 초과했을 때 하나씩 빼줄 용도
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt]; // arr배열을 순환하면서 sum에 값ㄴ을 더하고

    // 만약 sum이 m값을 넘게되면 배열의 앞에서부터 m이 될 때까지 값을 빼준다.
    while (sum > m) {
      sum -= arr[lt++];
    }
    // answer : 새로운 값이 추가될 때마다 그 값이 포함된 연속부분수열의 값이 +가 됨
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

// lt값은 일단 대입이 된 후에 ++가 된다는 것!
