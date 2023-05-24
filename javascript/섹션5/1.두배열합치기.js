// 1번 방법
// sort를 쓰면 시간 복잡도 : O(nlogn)
// function solution(arr1, arr2) {
//   let answer = [];
//   let n = arr1.length;
//   let m = arr2.length;

//   for (let i = 0; i < n; i++) {
//     answer.push(arr1[i]);
//   }

//   for (let j = 0; j < m; j++) {
//     answer.push(arr2[j]);
//   }

//   answer = answer.sort((a, b) => {
//     return a - b;
//   });
//   return answer;
// }

// let a = [1, 3, 5];
// let b = [2, 3, 6, 7, 9];
// console.log(solution(a, b));

// 2번 방법
// 투 포인터 알고리즘
// 시간 복잡도 : O(n+m)
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  // 포인터 생성
  let p1 = 0;
  let p2 = 0;

  // 포인터가 각각의 배열을 벗어나지 않는 범위에서
  // answer.push(arr[p1++]) => arr[p1]값을 먼저 push한 후에 p1값이 1증가
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  // 남은 값이 있는지 확인
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
