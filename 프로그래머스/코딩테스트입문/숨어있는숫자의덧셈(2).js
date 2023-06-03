function solution(my_string) {
  var answer = 0;

  var my_num = my_string.split("");

  var check = "";
  for (let i = 0; i < my_num.length + 1; i++) {
    if (parseInt(my_num[i]) >= 0) {
      check += my_num[i];
    } else {
      if (parseInt(check) > 0) {
        answer += parseInt(check);
        check = "";
      }
    }
  }

  return answer;
}
