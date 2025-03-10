function solution(spell, dic) {
  var lst = [];

  dic.forEach((ele) => {
    var count = 0;

    spell.forEach((item) => {
      if (ele.includes(item)) count++;
    });

    if (count === spell.length) lst.push(ele);
  });

  var answer = lst.length === 0 ? 2 : 1;
  return answer;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
