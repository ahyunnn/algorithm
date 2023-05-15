
import sys
sys.stdin = open('input.txt')

n, m = map(int, input().split())
lst = list(map(int, input().split()))
#
# answer = 0
#
# for i in range(n-2):                        # 첫번째 인덱스 : 0 ~ n-3
#     for j in range(i+1, n-1):               # 두번째 인덱스 : 첫번째 자리 +1 ~ n-2
#         for k in range(j+1, n):             # 세번째 인덱스 : 두번째 자리 +1 ~ n-1
#             sum = lst[i] + lst[j] + lst[k]
#
#             if (sum <= m and sum > answer): # m을 넘지 않고, 최대한 m에 가깝게 하기 위한 조건
#                 answer = sum
#
# print(answer)

from itertools import combinations  # 조합 사용을 위한 라이브러리 import
result = 0
for cards in combinations(lst, 3):  # cards는 lst에서 3개의 수를 꺼낸 조합
    if sum(cards) <= m:
        result = max(result, sum(cards))
print(result)
