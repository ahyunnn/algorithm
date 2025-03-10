function solution(id_pw, db) {
  let answer = "";

  for (let [id, pw] of db) {
    if (id_pw[0] === id && id_pw[1] === pw) answer = "login";
    else if (id_pw[0] === id && id_pw[1] !== pw) answer = "wrong pw";
    else if (id_pw[0] !== id && id_pw[1] !== pw) answer = "fail";
  }

  return answer;
}
