function solution(polynomial) {
  var answer = "";

  var split = polynomial.split(" ");

  var xSum = 0;
  var nSum = 0;

  for (let x of split) {
    if (x.includes("x")) {
      if (x.length > 1) {
        xSum += Number(x.replace("x", " "));
      } else {
        xSum += 1;
      }
    } else if (x === "+") {
      continue;
    } else {
      nSum += Number(x);
    }
  }

  // xSum이 1보다 크고, nSum이 존재할 때
  if (xSum > 1 && nSum) answer = String(xSum) + "x" + " + " + String(nSum)
  // xSum이 1보다 크고, nSum이 0일 때  
  else if (xSum > 1 && nSum === 0) answer = String(xSum) + "x"
  // xSum이 1이고, nSum이 존재할 때
  else if (xSum === 1 && nSum) answer = "x" + " + " + String(nSum)
  // xSum이 1이고, nSum이 0일 때
  else if (xSum === 1 && nSum === 0) answer = "x"
  // xSum이 0이고, nSum이 존재할 때
  else if (xSum === 0 && nSum) answer = String(nSum)
  // xSum이 0이고, nSum이 0일 때
  else if (xSum === 0 && nSum === 0) answer = 0
    
  return answer;
}
