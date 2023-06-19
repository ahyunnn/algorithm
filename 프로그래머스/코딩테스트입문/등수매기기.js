function solution(score) {
  var answer = Array(score.length).fill(1);
  var lst = [];

  // lst : 평균 계산 배열
  for ([eng, math] of score) {
    lst.push((eng + math) / 2);
  }

  // answer : 순위 담을 배열
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      // 값이 작으면 해당 값에 answer++
      if (lst[i] < lst[j]) answer[i]++;
    }
  }
  return answer;
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
