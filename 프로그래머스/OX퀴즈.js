function solution(quiz) {
  var answer = [];

  for (let x of quiz) {
    var line = x.split(" ");
    var res = Number(line[0]);

    console.log(line);

    for (let i = 1; i < line.length; i++) {
      if (line[i] === "+") {
        res += Number(line[i + 1]);
      } else if (line[i] === "-") {
        res -= Number(line[i + 1]);
      } else if (line[i] === "=") {
        if (Number(line[i + 1]) === res) {
          answer.push("O");
        } else {
          answer.push("X");
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
