function solution(my_string) {
  // 객체는 배열로 바꿔서 join해줘야한다!!!
  // 객체 자체로는 join해줄 수 없다.
  var arr = [...new Set(my_string.split(""))];

  arr = arr.join("");

  return arr;
}
