// 문제
// - 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열 return

// 1. 중간에 0(물)을 기준으로 왼쪽, 오른족은 순서만 다름
// 2. 주어진 음식은 두 선수가 먹는 양이 같아야하기 때문에 2로 나눈 몫만 반복하여 배치

// 코드
function solution(food) {
  let answer = ""
  let left = ""

  for (let i=1; i<food.length; i++) {
    left += String(i).repeat(food[i]/2)
  }

  answer = left + "0" + left.split("").reverse().join("")

  return answer
}