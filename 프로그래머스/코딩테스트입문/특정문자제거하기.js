function solution(my_string, letter) {
  var answer = "";
  answer = my_string
    .split("")
    .filter((ele) => ele != letter)
    .join("");
  return answer;
}
