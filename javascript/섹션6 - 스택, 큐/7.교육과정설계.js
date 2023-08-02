function solution(necc, course) {
  let answer = "YES";
  let lst = [];

  for (c of course) {
    for (n of necc) {
      if (c === n) {
        lst.push(c);
        break;
      }
    }
  }
  let compare = lst.join("");
  if (necc !== compare) answer = "NO";

  return answer;
}

console.log(solution("ABC", "ACBC"));
