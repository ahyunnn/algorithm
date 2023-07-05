function solution(str) {
  let answer = "";
  let stack = [];

  // ")"를 만났을 때 stack에서 "("를 찾을 때까지 pop해주기
  // while문에서는 pop을 한 후에 "("와 비교하기 때문에 이미 stack에서 pop()메서드는 실행된 상태
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }

  // stack = ['E', 'F', 'L', 'M']

  answer = stack.join("");

  return answer;
}

let c = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(c));
