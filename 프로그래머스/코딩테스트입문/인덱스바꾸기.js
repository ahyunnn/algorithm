function solution(my_string, num1, num2) {
  var answer = "";

  const my_st1 = my_string[num1]; // e
  const my_st2 = my_string[num2]; // l

  // replace는 첫번째 값을 바꾼다....
  // let first = my_string.replace(my_st1, my_st2); // hlllo
  // let second = first.replace(my_st2, my_st1);

  // 배열로 바꿔서 해당 값만 바꿔주고 다시 문자열로 합치는 것이 답!
  let arr = my_string.split("");

  arr[num1] = my_st2;
  arr[num2] = my_st1;

  console.log(arr);
  answer = arr.join("");
  return answer;
}
