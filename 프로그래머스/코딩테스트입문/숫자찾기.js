function solution(num, k) {
  var answer = 0;
  var str_num = String(num).split("");

  for (let i = 0; i < str_num.length; i++) {
    if (parseInt(str_num[i]) === k) {
      answer = i + 1;
      break;
    }
  }

  if (answer === 0) {
    answer = -1;
  }
  return answer;
}
