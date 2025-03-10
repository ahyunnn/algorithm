function solution(n) {
  var answer = 0;
  if (n % Math.sqrt(n) === 0) {
      answer = 1 
  } else {
      answer = 2
  }
  return answer;
}