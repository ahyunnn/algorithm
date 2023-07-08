function solution(numlist, n) {
  return numlist.sort((a, b) => {
    // numlist의 요소와 n을 뺀 값의 절댓값을 기준으로 정렬
    // numlist : [1, 2, 3, 4, 5, 6]
    // 절댓값 기준 정렬 (절대값) 오름차순 : [4(0), 3(1), 5(1), 2(2), 6(2), 3(1)]
    const [aGap, bGap] = [Math.abs(a - n), Math.abs(b - n)];

    // 차이의 절댓값이 같은 경우 내림차순으로 정렬
    if (aGap === bGap) return b - a;
    return aGap - bGap;
  });
}
