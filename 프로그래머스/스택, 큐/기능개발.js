function solution(progresses, speeds) {
  var answer = [];

  let newProgresses = progresses.map((x) => 100 - x);

  let num = 0;
  let days = [];

  for (let i = 0; i < newProgresses.length; i++) {
    let day = Math.round(newProgresses[i] / speeds[num]);
    days.push(day);
    num++;
  }

  for (let j = 0; j < days.length; j++) {
    let count = 1;
    for (let l = j + 1; l < days.length; l++) {
      if (days[j] >= days[l]) {
        count++;
      } else if (days[j] < days[l]) {
        answer.push(count);
      } else if (days.length === 1) {
        answer.push(count);
      }
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
