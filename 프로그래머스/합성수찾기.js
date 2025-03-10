function solution(n) {
  var answer = 0;

  for (let i = 1; i < n + 1; i++) {
    var cnt = 0;
    for (let j = 1; j < i + 1; j++) {
      if (i % j === 0) {
        cnt += 1;
      }
    }
    if (cnt >= 3) {
      answer += 1;
    }
  }

  return answer;
}
