function solution(money) {
  var answer = [];

  if (money / 5500 === 0) {
    answer[0] = money / 5500;
    answer[1] = 0;
  } else {
    answer[0] = Math.floor(money / 5500);
    answer[1] = money % 5500;
  }
  return answer;
}
