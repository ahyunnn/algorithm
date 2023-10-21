// function solution(prices) {
//   var answer = [];

//   while (prices.length) {
//     let cur = prices.shift();
//     let cnt = 0;

//     for (let i = 0; i < prices.length; i++) {
//       cnt++;
//       if (cur > prices[i]) break;
//     }

//     answer.push(cnt);
//   }
//   return answer;
// }
function solution(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];
  let length = prices.length;
  for (let i = 0; i < length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }
  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 1]));
