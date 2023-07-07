function solution(num, total) {
  var answer = [];

  // 규칙 찾기가 중요!
  var start = Math.ceil(total / num) - Math.floor(num / 2);
  var end = Math.floor(total / num) + Math.floor(num / 2);

  for (let i = start; i < end + 1; i++) {
    answer.push(i);
  }
  return answer;
}
