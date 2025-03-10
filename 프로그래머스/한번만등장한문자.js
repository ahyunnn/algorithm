function solution(s) {
  var answer = '';
  
  var str = s.split("")
  var setStr = [...new Set(str)].sort();
  var cntArr = Array.from(Array(setStr.length)).fill(0);
  
  for (let i=0; i<str.length; i++) {
      for (let j=0; j<setStr.length; j++) {
          if (str[i] === setStr[j]) {
              cntArr[j]++;
          }
      }
  }
  
  for (let i=0; i<cntArr.length; i++) {
      if (cntArr[i] === 1) {
          answer += setStr[i]
      }
  }
  

  return answer;
} 