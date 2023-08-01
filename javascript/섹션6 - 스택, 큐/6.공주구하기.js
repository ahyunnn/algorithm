// 큐를 이용하여 3번을 외친 왕자를 제외하는 방법

function solution(prince, number) {
  let answer = 0;
  let queue = Array.from({ length: prince }, (v, i) => i + 1); // 길이가 8이고 1부터 8까지의 왕자를 담은 리스트

  // queue 리스트에 요소가 없을 때까지 while문 돌리기
  // 1번, 2번을 외친 왕자는 다시 queue 리스트에 추가
  // 3번을 외친 왕자는 queue리스트에서 제외
  // queue 리스트의 길이가 1이면 한 명의 왕자가 남았으므로 답이 된다.
  while (queue.length) {
    for (let i = 1; i < number; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

console.log(solution(8, 3));
