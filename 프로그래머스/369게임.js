function solution(order) {
  var answer = 0;
  var str_order = String(order);
  var lst = str_order.split("");

  for (let i = 0; i < str_order.length; i++) {
    if (parseInt(str_order[i]) === 0) continue;
    if (parseInt(str_order[i]) % 3 == 0) {
      answer += 1;
    }
  }

  return answer;
}
