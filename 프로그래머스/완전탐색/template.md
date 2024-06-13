[![PRO]][Link]

## 문제 해석

- 수포자 3명이 각자의 패턴으로 수학 시험 문제를 찍을 때 정답을 가장 많이 맞춘 사람을 답으로 도출하기

## 최종 제출 코드

- `filter`메서드를 사용해서 정답과 패턴을 비교하여 같은 것만 남긴 배열을 만들기
- 해당 배열의 길이 중 가장 긴 것을 `max`로 두기
- 정답의 개수가 같을 수도 있기 때문에 순차적으로 `answer`에 값을 넣어준다.

```js
function solution(answers) {
  var answer = [];
  var one = [1, 2, 3, 4, 5];
  var two = [2, 1, 2, 3, 2, 4, 2, 5];
  var three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // a : answers의 요소, i : answers의 인덱스 (answers의 길이에 좌우된다!)
  var oneVal = answers.filter((a, i) => a === one[i % one.length]).length;
  var twoVal = answers.filter((a, i) => a === two[i % two.length]).length;
  var threeVal = answers.filter((a, i) => a === three[i % three.length]).length;

  var max = Math.max(oneVal, twoVal, threeVal);

  if (oneVal === max) answer.push(1);
  if (twoVal === max) answer.push(2);
  if (threeVal === max) answer.push(3);

  return answer;
}
```

## 시간 복잡도

- **∴ O()**

## 메모

- 꽤나 심플한 문제였던 것 같은데 생각보다 시간이 걸렸다. `for`문에서 비교를 하다가 `filter`메서드를 사용했던 것이 시간이 걸린 이유다.
- `filter(값, 인덱스)` 기억하자

<!---------------------------------------------------------------------------->

[PRO]: https://github.com/GoSSaChin/algorithm-js/assets/107768516/67c43b52-bc3f-4571-a249-5519021afbb0
[Link]: https://school.programmers.co.kr/learn/courses/30/lessons/42840
