import sys
sys.stdin = open("input.txt")

word = input()
answer = []

for i in range(len(word)):
    answer.append(word[i:])

answer.sort()

for i in answer:
    print(i)