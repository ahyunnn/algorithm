function solution(my_string) {
  var answer = [];
  for (x of my_string) {
    if (isNaN(x) == false) {
      answer.push(parseInt(x));
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}
