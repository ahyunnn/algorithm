function solution(n, k) {
  var answer = 0;
  var save = Math.floor(n / 10) * 2000;
  var total = 12000 * n + 2000 * k;
  answer = total - save;

  return answer;
}
