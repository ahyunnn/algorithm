function solution(bridge_length, weight, truck_weights) {
  var answer = 0; // 걸리는 초
  var bridge = Array.from({ length: bridge_length }, (_) => 0); // 다리를 나타내는 que
  var current = 0; // 현재 다리에 올라간 트럭의 무게

  // 첫 번째 트럭을 다리에 올리는 작업
  answer++;
  bridge.shift();
  current += truck_weights[0];
  bridge.push(truck_weights.shift());

  // 현재 다리에 트럭이 있을 때 도는 while문
  // while문 조건을 truck_weights.length로 하면 안되는 이유 : 남아있는 트럭이 없더라도 다리에 남아있는 트럭이 있기 때문
  // 그렇기 때문에 현재 다리에 있는 트럭들의 무게가 0이 되지 않았을 때를 기준!
  while (current > 0) {
    answer++;
    current -= bridge.shift();

    if (current + truck_weights[0] <= weight) {
      bridge.push(truck_weights[0]);
      current += truck_weights.shift();
    } else {
      bridge.push(0);
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
