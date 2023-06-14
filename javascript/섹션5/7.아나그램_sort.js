function solution(str1, str2) {
  let answer = "";

  let sortStr1 = str1.split("").sort();
  let sortStr2 = str2.split("").sort();

  console.log(sortStr1);
  console.log(sortStr2);

  if (sortStr1.join("") == sortStr2.join("")) {
    answer = "YES";
  } else {
    answer = "NO";
  }
  return answer;
}

console.log(solution("abaCC", "Caaab"));

// 가능한 방식이지만 sort의 시간복잡도는 O(nlogn)으로 해시함수의 O(n)보다 더 크다는 것!
// 시간복잡도 상으로 따지면 해싱함수를 쓰는 것이 훨씬 효율적이다!
