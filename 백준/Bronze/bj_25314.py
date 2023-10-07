import sys
sys.stdin = open("input.txt")

N = int(input())

for _ in range(N//4):
  print("long", end=" ")

print("int")
