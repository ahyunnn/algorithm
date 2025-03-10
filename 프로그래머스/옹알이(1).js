function solution(babbling) {
  var answer = 0;

  var possible = ["aya", "ye", "woo", "ma"];

  // babbling의 요소와 possible의 요소를 하나씩 비교
  // 만약 babbling의 요소에 possible의 요소가 포함되어 있다면 그 부분을 "X"로 치환
  babbling.forEach((ba) => {
    possible.forEach((po) => {
      if (ba.includes(po)) {
        ba = ba.replace(po, "X");
      }
    });

    // "X"를 공백으로 치환
    ba = ba.replace(/X/gi, "");

    // 공백이 있다는 것은 possible의 요소로만 babbling의 요소가 구성되어 있다는 뜻이므로 answer++
    if (ba.length === 0) answer++;
  });

  return answer;
}
