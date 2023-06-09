function factorial(number) {
  var num = BigInt(1);

  for (let i = 2; i <= number; i++) {
    num *= BigInt(i);
  }

  return num;
}

function solution(balls, share) {
  var answer = 0;

  answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  return answer;
}
