function solution(age) {
  var answer = "";
  var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  // 자리 수 별로 알파벳을 넣기 위해 문자 형태로 변환
  var str_age = age.toString();

  for (let i = 0; i < str_age.length; i++) {
    var alphabet = alpha[Number(str_age[i])];
    // var alphabet = alpha[parseInt(str_age[i])]
    console.log(typeof parseInt(str_age[i]));
    console.log(str_age[i]);
    answer += alphabet;
  }

  return answer;
}
