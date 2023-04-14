import sys

word = list(input())

flag = 0
answer = ""
reverse = ""

for i in word:
    if flag == 1:
        if i == ">":
            flag = 0
            answer += i
            continue
        answer += i
    else:
        if i == "<":
            if reverse:
                answer += reverse[::-1]
                reverse = ""
            flag = 1
            answer += i
        elif i == " ":
            answer += reverse[::-1] + " "
            reverse = ""
        else:
            reverse += i

if reverse:
    answer += reverse[::-1]
print(answer)