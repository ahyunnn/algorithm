function solution(numbers) {
  var answer = -Infinity;

  var res = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i != j) {
        res.push(numbers[i] * numbers[j]);
      }
    }
  }

  for (let k = 0; k < res.length; k++) {
    if (answer < res[k]) {
      answer = res[k];
    }
  }
  return answer;
}

// answer을 처음에 0으로 해두고 max값을 비교하다보니 만약 최대값이 음수이면 무조건 0을 반환해서 계속 테스트 케이스 7번이 안 맞았다.
// 그래서 `Infinty`라는 메서드를 사용해서 매우 큰 음수 값을 넣어주니까 해결!
