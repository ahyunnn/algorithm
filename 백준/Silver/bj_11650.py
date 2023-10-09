import sys
sys.stdin = open("input.txt")

n = int(input())
lst = []

for _ in range(n):
  [a, b] = map(int, input().split())
  lst.append([a, b])

new_lst = sorted(lst)

for i in range(n):
  print(new_lst[i][0], new_lst[i][1])