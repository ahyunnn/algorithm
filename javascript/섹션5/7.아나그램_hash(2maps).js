function solution(str1, str2) {
  let answer = "";

  let first = new Map();
  let second = new Map();

  // first map 객체에 str1에 대한 정보 담기
  for (let i = 0; i < str1.length; i++) {
    if (first.has(str1[i])) first.set(str1[i], first.get(str1[i]) + 1);
    else first.set(str1[i], 1);
  }

  // second map 객체에 str2에 대한 정보 담기
  for (let i = 0; i < str2.length; i++) {
    if (second.has(str2[i])) second.set(str2[i], second.get(str2[i]) + 1);
    else second.set(str2[i], 1);
  }

  // 비교 : 같은 문자를 넣었을 때 개수 비교
  for (let i = 0; i < str1.length; i++) {
    if (first.get(str1[i]) != second.get(str1[i])) answer = "NO";
    else answer = "YES";
  }

  return answer;
}

console.log(solution("abaCC", "Caaab"));
