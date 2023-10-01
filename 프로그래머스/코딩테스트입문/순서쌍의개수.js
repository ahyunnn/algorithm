function solution(n) {
  var answer = 0;
  var lst = [];
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      lst.push([i, n / i]);
    }
  }
  answer = lst.length;
  return answer;
}
