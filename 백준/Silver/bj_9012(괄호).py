import sys
sys.stdin = open("input.txt")

N = int(input())

for _ in range(N):
    stack = []
    lst = input()

    for i in lst:
        if i == "(":
            stack.append("(")
        elif i == ")":
            if stack:
                # stack에 남아있는 문자는 "("밖에 없음!
                stack.pop()
            else:
                # stack에 ")"를 넣자마자 break해버리기 때문에!
                stack.append(")")
                break

    if stack:
        print("NO")
    else:
        print("YES")
