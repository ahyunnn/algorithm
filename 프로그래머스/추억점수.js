function solution(name, yearning, photo) {
  let result = [];

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      for (let k = 0; k < name.length; k++) {
        if (name[k] === photo[i][j]) {
          sum += yearning[k];
        }
      }
    }
    result.push(sum);
  }
  return result;
}

let a = ["may", "kein", "kain", "radi"];
let b = [5, 10, 1, 3];
let c = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];
console.log(solution(a, b, c));
