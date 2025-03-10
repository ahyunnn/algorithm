function solution(name, yearning, photo) {
  let answer = [];
  let dict = {};

  for (let i = 0; i < name.length; i++) {
    dict[name[i]] = yearning[i];
  }

  for (const p of photo) {
    let cnt = 0;
    for (let j = 0; j < p.length; j++) {
      if (dict.hasOwnProperty(p[j])) {
        cnt += dict[p[j]];
      } else {
        continue;
      }
    }
    answer.push(cnt);
  }

  return answer;
}
