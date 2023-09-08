function solution(priorities, location) {
  var answer = 0;
  var arr = [];
  var max_val = Math.max(...priorities);

  // 위치 값이 저장된 arr 배열 만들어주기
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i);
  }

  // location의 위치에 맞는 프로세스의 순서 찾기 위한 while문
  while (priorities.length > 0) {
    // priorities의 값이 shift()로 없어지기 때문에 max_val은 계속 갱신
    max_val = Math.max(...priorities);

    // 비교했을 때 최대값보다 작으면 큐이기 때문에 shift()하고 push()해서 이동
    if (priorities[0] < max_val) {
      priorities.push(priorities.shift());
      arr.push(arr.shift());
      // 크면 순서가 되었다는 뜻이므로 answer에 + 1해주고 해당값을 priorities에서 shift()
    } else {
      answer += 1;
      priorities.shift();
      if (arr.shift() === location) {
        return answer;
      }
    }
  }

  return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
