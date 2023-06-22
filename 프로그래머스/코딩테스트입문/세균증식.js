function solution(n, t) {
  var answer = 0;
  
  for (let i=1; i<=t; i++) {
      if (i=== 1) {
          answer = n * 2
      } else {
          answer = answer * 2
      }
  }
  return answer;
}