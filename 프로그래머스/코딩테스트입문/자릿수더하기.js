function solution(n) {
  var answer = 0;
  var str_n = String(n);

  for (let i = 0; i < str_n.length; i++) {
    answer += Math.floor(n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
}
