function solution(my_str, n) {
  var answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    // splice(i, n) : i는 시작점의 인덱스 n은 문자 개수
    var check = my_str.split("").splice(i, n).join("");
    answer.push(check);
  }

  return answer;
}

console.log(solution("abc1Addfggg4556b", 6));
