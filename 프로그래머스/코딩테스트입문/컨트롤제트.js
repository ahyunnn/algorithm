function solution(s) {
  var lst = s.split(" ");
  var sum = 0;

  for (let i = 0; i < lst.length; i++) {
    if (lst[i] != "Z") {
      sum += Number(lst[i]);
    } else {
      sum -= Number(lst[i - 1]);
    }
  }
  return sum;
}
console.log(solution("1 2 Z 3"));
