function solution(progresses, speeds) {
  var answer = [0];

  // newProgresses : 남은 일수를 계산
  let newProgresses = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  // max : 기능개발 시간이 더 걸리는 날
  let max = newProgresses[0];

  // newProgresses의 요소들을 순회하면서 max값 기준으로 answer에 값을 차곡차곡 쌓아나가기
  // i : 순회를 위한 횟수
  // j : answer의 인덱스 번호
  for (let i = 0, j = 0; i < newProgresses.length; i++) {
    // max값보다 작거나 같은 경우에는 누적
    if (newProgresses[i] <= max) {
      answer[j] += 1;
    } else {
      // max값보다 큰 경우에는 다음날로 넘어가기
      max = newProgresses[i];
      answer[++j] = 1;
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
