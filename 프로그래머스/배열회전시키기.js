function solution(numbers, direction) {
  var answer = [];

  if (direction === "right") {
    for (let i = 1; i < numbers.length; i++) {
      answer[0] = numbers[numbers.length - 1];
      answer[i] = numbers[i - 1];
    }
  }

  if (direction === "left") {
    for (let i = 0; i < numbers.length - 1; i++) {
      answer[numbers.length - 1] = numbers[0];
      answer[i] = numbers[i + 1];
    }
  }
  return answer;
}

// 일단 파이썬에서는 배열의 인덱스 접근할 때 arr[-1]이 가능해서 계속 썼더니 right일 때는 첫 번재 값이, left일 때는 마지막값이 null이 떴다.
// 알고보니 javascript에서는 인덱스 값은 0부터 시작이라서 음수는 허용하지 않는다고 한다
