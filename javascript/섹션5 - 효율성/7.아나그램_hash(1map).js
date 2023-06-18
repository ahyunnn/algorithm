function solution(str1, str2) {
  let answer = "YES";

  let hash = new Map();

  // str1의 값을 hash 객체에 넣어주기 Map(3) {size: 3, a => 2, b => 1, C => 2}
  for (let x of str1) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }

  // str2의 값을 hash와 비교하면서 answer찾기
  // !hash.has(x) : hash에 str2의 요소가 없다.
  // hash.get(x) === 0 : hash객체에 str2 요소가 있으면 개수를 빼는 중 => 개수가 0이면 없다는 뜻!
  for (let x of str2) {
    if (!hash.has(x) || hash.get(x) === 0) return "NO";
    hash.set(x, hash.get(x) - 1);
  }

  return answer;
}

console.log(solution("abaCC", "Caaab"));
