function compareMaps(map1, map2) {
  // 두 map객체의 key값 개수가 다르면
  if (map1.size != map2.size) return false;
  // key개수는 같으나 key값이 다르거나, value값이 다르면 (map1을 기준으로 map2 비교)
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) != val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  // t에 대한 map객체 생성 : {size: 3, a => 1, b => 1, c => 1}
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  // s에서 슬라이딩 윈도우와 투 포인터를 이용해서 sH 객체 만들기
  // 처음 두자리 값 구해두기
  for (let i = 0; i < t.length - 1; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  // 값 비교
  let lt = 0;
  for (let rt = t.length - 1; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    // sH와 tH를 비교하기 위한 compareMaps
    if (compareMaps(sH, tH)) answer++;

    // 슬라이딩 윈도우를 이동하기 위해 lt의 값을 -1
    sH.set(s[lt], sH.get(s[lt]) - 1);

    // map객체에서는 key의 value가 0이더라도 key가 존재하면 값이 있다고 보기 때문에 삭제해주어야한다.
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);

    // 다음 계산을 위해 lt값 ++
    lt++;
  }
  return answer;
}

console.log(solution("bacaAacba", "abc"));
