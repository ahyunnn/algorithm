import sys
sys.stdin = open('input.txt')

n = int(input())
lst = []
answer = 0

for _ in range(n):
    num = int(input())
    if num != 0:
        lst.append(num)
    elif num == 0:
        lst.pop()

if lst:
    for i in range(len(lst)):
        answer += lst[i]
else:
    answer = 0

print(answer)

