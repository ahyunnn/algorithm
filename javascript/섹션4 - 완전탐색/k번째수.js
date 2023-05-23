function solution(n, k, card) {
  let answer;

  // 3개 숫자를 더한 값을 담을 tmp
  let tmp = new Set();

  // 3개 숫자 더하기
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let a = Array.from(tmp).sort((a, b) => b - a);
  // let b = Array.from(tmp).sort(function (a, b) {return b - a;});
  answer = a[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
