function solution(n) {
  var answer = 0;

  // 찾아야하는 값 n까지 계속 for문을 돌면서 +
  for (let i = 1; i <= n; i++) {
    answer++;

    // answer에 3이 포함되거나, answer이 3의 배수이면 answer++
    while (answer.toString().includes("3") || answer % 3 === 0) {
      answer++;
    }
  }
  return answer;
}
