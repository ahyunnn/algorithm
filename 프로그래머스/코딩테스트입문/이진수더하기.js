function decimal(num) {
  var binArr = num.split("").reverse();
  var sum = 0;
  var cnt = 0;

  for (let i = 0; i < binArr.length; i++) {
    if (parseInt(binArr[i]) === 0) {
      cnt += 1;
      continue;
    } else {
      sum += 2 ** cnt;
      cnt += 1;
    }
  }
  return sum;
}

function binary(num) {
  var res = "";

  if (num === 0) {
    return "0";
  }
  while (num != 0) {
    var spare = num % 2;
    res += spare;
    num = Math.floor(num / 2);
  }

  return res.split("").reverse().join("");
}

function solution(bin1, bin2) {
  var dec1 = decimal(bin1);
  var dec2 = decimal(bin2);
  var sum = dec1 + dec2;

  sum = binary(sum);
  return sum;
}
console.log(solution("0", "0"));
