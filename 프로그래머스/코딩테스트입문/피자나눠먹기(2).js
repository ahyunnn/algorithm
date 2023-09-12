function solution(n) {
  var answer = 0;
  var pizzaSlice = 6;

  // n이 6의 배수가 될 때까지 더하기
  while (pizzaSlice % n != 0) {
    pizzaSlice += 6;
  }

  answer = pizzaSlice / 6;

  return answer;
}
