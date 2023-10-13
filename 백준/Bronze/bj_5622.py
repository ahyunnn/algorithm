import sys 
sys.stdin = open("input.txt")

word = list(input())

dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'] 

answer = 0

for i in word:
  for j in dial:
    if i in str(j):
      result = dial.index(j) + 3
      answer += result

print(answer)