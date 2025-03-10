function solution(emergency) {
  var answer = [];
  // 내림차순 정렬
  // var sort_arr = emergency.sort(function(a,b){return a-b})
  var sort_arr = [...emergency].sort((a,b)=> (b-a))
  console.log(sort_arr)
  // 순위를 담을 배열 : idx_arr
  var idx_arr = [];
  for (let i=0; i<sort_arr.length; i++) {
      idx_arr.push(i+1)
  }
  console.log(idx_arr)
  var check_idx=0;
  for (let i=0; i<emergency.length; i++){
      for (let j=0; j<sort_arr.length; j++) {
          if(emergency[i] === sort_arr[j]) {
              answer.push(idx_arr[j])
          }
      }
  }
  return answer;
}