function solution(numbers, k) {
  var ball = 1; // 처음 공을 던지는 번호

  for (let i = 0; i < k - 1; i++) {
    // k - 1 : 이미 1번 선수가 던졌고, k-1번째 선수가 던진 공의 위치를 찾는 것
    ball += 2;
    if (ball > numbers.length) {
      // 인덱스 번호가 아니라 선수 번호기 때문에 number.length가 배열의 마지막 값이므로 ball이 number.length보다 크면 빼줘야함
      ball -= numbers.length;
    }
  }

  return ball;
}

console.log(solution([1, 2, 3, 4, 5, 6], 5));
