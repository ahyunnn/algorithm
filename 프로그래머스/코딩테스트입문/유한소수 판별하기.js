// 최대공약수 구하기
function solution(a, b) {
  //1. a와 b의 최대공약수 g구하기
  var g = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) g = i;
  }

  // 2. 분모를 최대공약수 g로 나누어주기
  b = b / g;

  // 3. b를 2와 5로 나눈 나머지 값이 0이 될 때까지 반복문 실행
  // b가 2와 5를 제외한 다른 소수가 있는지 확인
  while (b % 2 === 0) b = b / 2;
  while (b % 5 === 0) b = b / 5;

  // 4. b가 1이면 유한소수, 아니면 무한소수
  return b === 1 ? 1 : 2;
}
