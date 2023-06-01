function solution(n) {
  var answer = 1;
  var factorial = 1;

  // 팩토리얼 값을 구하는 과정
  while (factorial < n) {
    answer++;
    factorial *= answer;
  }

  // 팩토리얼 값이 n보다 크면 -1 아니면 그대로
  if (factorial > n) {
    answer -= 1;
  }
  return answer;
}

console.log(solution(3628800));
