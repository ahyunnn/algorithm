import sys
sys.stdin = open('input.txt')

n = int(input())
answer = []

for _ in range(n):
    age, name = input().split()
    answer.append([int(age), name])

# answer 정렬
# sort의 기준은 x[0]
# lambda 매개변수 : 표현식
answer.sort(key = lambda x: x[0])
for i in answer:
    print(i[0], i[1])