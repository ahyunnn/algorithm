from collections import deque
import sys
sys.stdin = open('input.txt')

answer = deque()
answer.append(-1)

T = int(input())
lst = list(map(int, input().split()))
# answer = []

for i in range(T):
    check = lst[i]

    if i == T-1:
        answer.append(-1)

    else:
        for j in range(i+1, T):
            max_val = check
            if lst[j] > max_val:
                answer.append(lst[j])
                break

if max(lst) != lst[0]:
    answer.popleft()

print(*answer)