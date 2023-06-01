function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(solution(a, 2));
