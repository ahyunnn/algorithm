function solution(my_string) {
  var answer = 0;

  var check = "";
  for (let i = 0; i < my_string.length + 1; i++) {
    if (my_string[i] != " ") {
      if (Number(my_string[i]) >= 0) {
        check += my_string[i];
      } else {
        answer += Number(check);
        check = my_string[i];
      }
    }
  }
  return answer;
}

console.log(solution("10 + 1"));
