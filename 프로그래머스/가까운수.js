function solution(array, n) {
  var answer = 0;
  // (절대값 - n)한 최솟값을 절대값으로 바꾸기
  var filter_arr = array.map((number) => Math.abs(number) - n);
  var abs_arr = filter_arr.map((number) => Math.abs(number));
  // 절대값 중 최솟값 찾기
  var min_num = Math.min(...abs_arr);
  // 최솟값들을 담을 lst
  var lst = [];
  // 최솟값에 해당하는 값들의 array값을 lst에 담기
  for (let i = 0; i < abs_arr.length; i++) {
    if (abs_arr[i] === min_num) {
      lst.push(array[i]);
    }
  }
  //lst중 최솟값 담기
  answer = Math.min(...lst);

  return answer;
}
