function solution(numbers, target) {
  let answer = 0;

  // dfs 정의
  // index : numbers의 인덱스
  // sum : 해당 인덱스만큼의 합
  function dfs(index, sum) {
    // 마지막 인덱스 번호까지 도달하지 않았을 때
    if (index < numbers.length) {
      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
    } else {
      // 마지막 인덱스 번호까지 더해줬고, target과 sum을 비교
      if (sum === target) {
        answer++;
      }
    }
  }
  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
