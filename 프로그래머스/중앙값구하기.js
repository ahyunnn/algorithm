function solution(array) {
  var answer = 0;
  var mid = Math.floor(array.length / 2);

  array.sort(function (a, b) {
    return a - b;
  });
  answer = array[mid];

  return answer;
}
