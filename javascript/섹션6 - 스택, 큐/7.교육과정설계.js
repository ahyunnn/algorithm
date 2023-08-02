// function solution(necc, course) {
//   let answer = "YES";
//   let lst = [];

//   for (c of course) {
//     for (n of necc) {
//       if (c === n) {
//         lst.push(c);
//         break;
//       }
//     }
//   }
//   let compare = lst.join("");
//   if (necc !== compare) answer = "NO";

//   return answer;
// }

// console.log(solution("ABC", "ACBC"));
function solution(necc, course) {
  let answer = "YES";
  let queue = necc.split(""); // ["A", "B", "C"]

  // course의 요소가 queue에 포함되어 있지만, 순서가 맞지 않으면 NO
  for (let x of course) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) answer = "NO";
    }
  }

  // queue에 값이 남아있으면 NO (necc에는 포함되지만 course에는 요소가 없는 경우)
  if (queue.length > 0) answer = "NO";
  return answer;
}

console.log(solution("ABC", "ACBC"));
