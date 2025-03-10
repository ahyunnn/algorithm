function solution(array) {
  var answer = array.join("").toString().split("").filter((element) => {return element === "7"}).length;
  console.log(answer)
  return answer;
}

// function solution(array) {
//     return(array.join().split("").filter((el)=>{return el=="7"}).length)
// }