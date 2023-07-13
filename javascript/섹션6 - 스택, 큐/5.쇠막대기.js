function solution(str) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push("(");
    else {
      stack.pop();
      // 레이저의 닫는 괄호
      if (str[i - 1] === "(") answer += stack.length;
      // 막대기의 닫는 괄호
      else answer += 1;
    }
  }

  return answer;
}

let s = "()(((()())(())()))(())";
console.log(solution(s));
