function solution(str) {
  let answer;
  let stack = [];

  for (let x of str) {
    // isNaN : 숫자인지 판별하는 메서드
    // NOT A NUMBER(숫자가 아니면) 이면 true 반환
    // 숫자면 false 반환
    // type이 string이더라도 숫자면 false를 반환!
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();

      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }

  answer = stack[0];
  return answer;
}

let s = "352+*9-";
console.log(solution(s));
