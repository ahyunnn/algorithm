import sys
sys.stdin = open('input.txt')

word = list(input())
stack = []
# print(word)
answer = []

for i in word:
    if i != " ":
        if i == "<":
            answer.append("<")
        elif i == ">":
            answer.append(">")
        else:
            stack.append(i)
    elif i == " ":
        for j in range(len(stack)):
            a = stack.pop()
            answer.append(a)
        answer.append(" ")

if stack:
    stack = stack[::-1]
    # print(stack)
    for k in stack:
        answer.append(k)
print(*answer)
