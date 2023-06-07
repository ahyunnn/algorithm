const solution = (str) => {
  const obj = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  var splitStr = str.split("");
  var keys = Object.keys(obj); // key값들의 배열

  // 이중 for문으로 splitStr과 keys의 요소 비교하여 일치하면 +1
  for (let i = 0; i < splitStr.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (splitStr[i] === keys[j]) {
        obj[splitStr[i]]++;
      }
    }
  }
  // obj : {A: 3, B: 3, C: 5, D: 2, E: 2}

  var values = Object.values(obj);
  // maxIdx : obj의 value값 중 최대값의 index번호
  var maxIdx = values.indexOf(Math.max(...values));

  return keys[maxIdx];
};

let str = "BACBACCACCBDEDE";
console.log(solution(str));
