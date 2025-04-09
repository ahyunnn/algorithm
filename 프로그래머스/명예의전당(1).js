// 문제
// - 명예의 전당 목록의 점수의 개수 k개, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return

// 1. 순서대로 lst 배열에 넣으면서 내림차순으로 정렬
// 2. lst 배열의 길이가 k를 초과하면 마지막 요소를 pop으로 제거 => 상위 k번째까지만 명예의 전당에 머무를 수 있음
// 3. answer 배열에 가장 마지막에 위치한 요소(최하위 요소)를 push

// 코드
function solution(k, score) {
  var answer = [];
  let lst = [];

  for (let i = 0; i < score.length; i++) {
    lst.push(score[i]);
    lst.sort((a, b) => b - a);
    if (lst.length > k) lst.pop();
    answer.push(lst[lst.length - 1]);
  }

  return answer;
}
