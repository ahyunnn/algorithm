function solution(lines) {
  var answer = 0;

  // 겹치는 선분을 표시할 리스트
  // - 100 <=  a < b <= 100 이기 때문에 리스트의 길이를 200으로 해두어야한다!
  var lst = new Array(200).fill(0);

  for (let x of lines) {
    var left = x[0];
    var right = x[1];

    // 선분의 길이만큼 ++
    // 음수도 있기 때문에 100을 0 기준점으로 생각하고 구해야함!
    for (let i = left; i < right; i++) {
      lst[i + 100]++;
    }
  }

  // lst를 돌면서 2 이상인 값 answer++
  for (let j in lst) {
    if (lst[j] >= 2) answer++;
  }

  return answer;
}
