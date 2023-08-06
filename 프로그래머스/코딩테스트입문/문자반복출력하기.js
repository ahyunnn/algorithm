function solution(my_string, n) {
  var answer = '';
  
  for (let i =0; i<my_string.length; i++){
      for (let j=1; j<n+1; j++) {
          answer += my_string[i]
      }
  }
  return answer;
}