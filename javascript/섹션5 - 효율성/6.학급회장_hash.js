function solution(str) {
  let answer = "";

  let hash = new Map();

  // map객체에 기호와 횟수를 넣는 과정
  // set : map객체에 주어진 키와 값을 추가, 업데이트
  // has : map객체에 주어진 키에 해당하는 요소 존재 여부 확인
  // get : map객체에 주어진 키에 해당하는 요소 반환
  for (let s of str) {
    if (hash.has(s)) hash.set(s, hash.get(s) + 1);
    else hash.set(s, 1);
  }

  let max = Number.MIN_SAFE_INTEGER; // 충분히 작은 수
  // hash 객체에서 [key, value] 타입으로 하나씩 꺼내기
  for (let [key, value] of hash) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
