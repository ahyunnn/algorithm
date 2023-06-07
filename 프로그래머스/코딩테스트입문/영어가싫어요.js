function solution(numbers) {
  var answer = 0;
  var nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  numbers = numbers.split("");
  var check = "";
  var numKeys = Object.keys(nums); // key값들만 뽑은 배열

  for (let i = 0; i < numbers.length; i++) {
    check += numbers[i];
    for (let j = 0; j < numKeys.length; j++) {
      if (check === numKeys[j]) {
        answer += String(nums[numKeys[j]]);
        check = "";
      }
    }
  }

  return Number(answer);
}
console.log(solution("fourfivesixseveneightninezero"));
