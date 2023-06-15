function solution(id_pw, db) {
  let answer = "";

  // for문을 사용하면 마지막 값을 기준으로 result가 도출된다.
  // 하지만 map을 사용하면 값이 나왔을 때 break가 되는건가?
  db.map((item) => {
    if (id_pw[0] === item[0] && id_pw[1] === item[1]) answer = "login";
    else if (id_pw[0] === item[0] && id_pw[1] !== item[1]) answer = "wrong pw";
    else if (id_pw[0] !== item[0] && id_pw[1] !== item[1]) answer = "fail";
  });

  return answer;
}

console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
);
