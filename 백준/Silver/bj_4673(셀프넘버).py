import math
n = 1
self_list = []

# 생성자를 넣고 결과를 만들어내는 함수
def self(num):
    length = len(str(num))
    result = num

    for i in range(1, length+1):
        result += num % 10
        num = math.floor(num / 10)

    return result

for j in list(range(1, 10001)):
    # 결과들 self 리스트에 넣기
    self_list.append(self(j))
    # j가 생성자가 되는지 여부를 판단, 없다면 print
    if j not in self_list:
        print(j)