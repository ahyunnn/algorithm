function solution(array) {
  let answer = new Map();

  for (let num of array) {
    // answer에 num을 키로, 값이 있으면 값을 불러오고 없으면 0으로 설정해서 +1 해주기
    answer.set(num, (answer.get(num) || 0) + 1);
  }

  // answer을 값 기준으로 내림차순 정렬해주기
  answer = [...answer].sort((a, b) => b[1] - a[1]);

  // return 조건 : 삼항연산자
  // array의 값이 하나면 (최빈값이 하나라는 뜻)
  // 내림차순으로 정렬한 answer의 첫번째 값이 두번째 값보다 크면 (최빈값은 하나만 존재)
  return answer.length === 1 || answer[0][1] > answer[1][1] ? answer[0][0] : -1;
}
