function solution(sides) {
  var answer = 0;
  var maxNum = Math.max(...sides);
  var minNum = Math.min(...sides);

  // sides의 최대값이 긴 변인 경우
  for (let i = maxNum - minNum + 1; i < maxNum + 1; i++) {
    answer++;
  }
  // x가 가장 긴 변인 경우
  for (let i = maxNum + 1; i < maxNum + minNum; i++) {
    answer++;
  }
  return answer;
}
