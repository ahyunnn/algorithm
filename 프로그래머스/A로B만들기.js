function solution(before, after) {
  var answer = 0;

  var check1 = before.split("").sort().join("");
  var check2 = after.split("").sort().join("");

  if (check1 == check2) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}
