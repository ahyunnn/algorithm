function solution(arr) {
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  const stack = [];

  stack.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (stack[-1] == arr[i]) {
      continue;
    } else {
      stack.push(arr[i]);
    }
  }

  return stack;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
