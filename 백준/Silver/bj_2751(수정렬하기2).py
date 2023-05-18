import sys
sys.stdin = open('input.txt')

n = int(input())
lst = []

for _ in range(n):
    num = int(sys.stdin.readline())
    # int(input())하면 시간 초과 뜬다!!
    lst.append(num)

lst.sort()

for i in range(n):
    print(lst[i])