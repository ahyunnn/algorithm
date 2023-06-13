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
