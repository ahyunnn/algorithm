function solution(A, B) {
  var answer = 0;
  var str = B + B;

  answer = str.indexOf(A);
  return answer;
}
