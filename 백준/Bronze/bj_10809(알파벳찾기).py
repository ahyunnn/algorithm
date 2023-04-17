import sys
sys.stdin=open("input.txt")

word = list(input())
alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

answer = [0] * 26
for a in range(len(alpha)):
    for i in word:
        if alpha[a] == i:
            answer[a] += 1

print(*answer)