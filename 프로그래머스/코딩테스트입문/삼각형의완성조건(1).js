function solution(sides) {
  var answer = 0;
  sides.sort(function (a, b) {
    return a - b;
  });
  if (sides[2] < sides[0] + sides[1]) {
    return (answer = 1);
  } else {
    return (answer = 2);
  }
  return answer;
}
