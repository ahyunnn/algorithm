function solution(chicken) {
  let coupon = chicken; // 현재 쿠폰의 수
  let answer = 0; // 서비스 치킨의 수

  while (coupon > 9) {
    answer += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10 + (coupon % 10));
  }

  return answer;
}

console.log(solution(90));
