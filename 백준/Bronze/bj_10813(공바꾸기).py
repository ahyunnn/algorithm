import sys
sys.stdin = open("input.txt")

n, m = map(int, input().split())
lst = [ i for i in range(1, n+1)] # [1, 2, 3, 4, 5]

for j in range(m):
  a, b = map(int, input().split())
  lst[a-1], lst[b-1] = lst[b-1], lst[a-1]

for k in range(n):
  print(lst[k], end=" ")



  