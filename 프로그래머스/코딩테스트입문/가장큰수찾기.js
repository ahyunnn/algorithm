function solution(array) {
  var answer = [];
  var max_number = 0;
  var index_max = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max_number) {
      max_number = array[i];
    }
  }
  index_max = array.indexOf(max_number);

  answer[0] = max_number;
  answer[1] = index_max;

  return answer;
}
