function solution(my_string) {
  var lower = '';
  
  lower = my_string.toLowerCase();
  
  // 나누고, 정렬하고, 다시 합친다.
  var answer = lower.split("").sort().join("")
  return answer;
}