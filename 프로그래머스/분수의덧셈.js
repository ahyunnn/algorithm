// 최대 공약수 구하기
function gcd(numer, denom) {
  if (numer % denom === 0) {
    return denom;
  } else {
    var rest = numer % denom;
    return gcd(denom, rest);
  }

  // return numer % denom === 0 ? denom : gcd(denom, numer % denom)
}

function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  var numer = numer1 * denom2 + numer2 * denom1;
  var denom = denom1 * denom2;

  var ans = gcd(numer, denom);

  answer[0] = numer / ans;
  answer[1] = denom / ans;

  return answer;
}
