function solution(str) {
  let answer = "YES";
  let stack = [];

  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      // stack에 값이 없으면 -> false
      if (stack.length === 0) return "NO";
      // stack에 값이 있으면
      stack.pop();
    }
  }

  if (stack.length > 0) return "NO";

  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
