function solution(sizes) {
  let answer = 0;

  let arr = sizes.map((size) =>
    size[0] < size[1] ? [size[1], size[0]] : [size[0], size[1]]
  ); // 가로 세로 값 중 가장 큰 값을 첫 번째 값으로 이동

  let width = []; // 가로 값만 담을 리스트
  let height = []; // 세로 값만 담을 리스트

  for (x of arr) {
    width.push(x[0]);
    height.push(x[1]);
  }

  answer = Math.max(...width) * Math.max(...height); // spread 연산자를 이용 최대값 찾아주기

  return answer;
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(solution(sizes));
