function solution(n) {
  var answer = [];
  var check = 2;

  while (n >= 2) {
    if (n % check === 0) {
      answer.push(check);
      n = n / check;
    } else {
      check++;
    }
  }
  answer = [...new Set(answer)];

  return answer;
}
