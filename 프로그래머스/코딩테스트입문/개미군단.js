function solution(hp) {
  var answer = 0;
  var lst = [5, 3, 1];

  for (let i = 0; i < 3; i++) {
    if (hp) {
      count = Math.floor(hp / lst[i]);
      answer += count;
      hp = hp - count * lst[i];
    } else {
      break;
    }
  }
  return answer;
}
