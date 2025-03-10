function solution(i, j, k) {
  var answer = 0;

  for (let l = i; l < j + 1; l++) {
    var str_num = String(l).split("");
    for (let m = 0; m < str_num.length; m++) {
      if (str_num[m] === String(k)) {
        answer += 1;
      }
    }
  }
  return answer;
}
