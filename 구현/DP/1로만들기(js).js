// DP : 기억하기 알고리즘
// 1에서 5를 만들기 위해 이용된 조건의 횟수를 d에 저장하는 방법
function solution(num) {
  var dp = Array(num + 1).fill(0);

  for (let i = 2; i < num + 1; i++) {
    // 1을 뺐을 때
    dp[i] = dp[i - 1] + 1;

    // 2로 나누어떨어질때
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    // 3으로 나누어떨어질 때
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }

    // 5으로 나누어떨어질 때
    if (i % 5 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 5] + 1);
    }
  }

  console.log(dp); // [0, 0, 1, 1, 2, 1]
  return dp[num];
}
console.log(solution(5)); // 1
