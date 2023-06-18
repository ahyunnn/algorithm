function solution(arr1, arr2) {
  let answer = [];

  // 각 배열의 포인터 정의
  let p1 = 0;
  let p2 = 0;

  // 각 배열의 길이 n, m
  let n = arr1.length;
  let m = arr2.length;

  // 값 오름차순 정렬
  arr1.sort(function (a, b) {
    return a - b;
  });
  arr2.sort(function (a, b) {
    return a - b;
  });

  // 공통원소 찾기 - 각 배열의 범위를 벗어나지 않는 선에서 while문 돌리기
  while (p1 < n && p2 < m) {
    // 값이 같으면 push해주고 p1, p2에 +1
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
      // p1이 작으면 p1 += 1
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
      // p2가 작으면 p2 += 1
    } else {
      p2++;
    }
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
