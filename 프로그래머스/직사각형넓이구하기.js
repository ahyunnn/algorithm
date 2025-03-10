function solution(dots) {
  var answer = 0;
  dots.sort((a, b) => a[0] - b[0]);

  var width = Math.abs(dots[0][0] - dots[2][0]);
  var height = Math.abs(dots[0][1] - dots[1][1]);

  answer = width * height;

  return answer;
}
