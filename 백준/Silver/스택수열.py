import sys
sys.stdin = open('input.txt')

T = int(input())
stack = []
answer = []
cur = 1

for i in range(T):
    num = int(input())

    while cur <= num:
        stack.append(cur)
        cur += 1
        answer.append("+")

    if num == stack[-1]:
        stack.pop()
        answer.append("-")
    else:
        answer = "NO"
        break

if answer == "NO":
    print("NO")
else:
    for j in answer:
        print(j)





# for l in range(len(prt)):
#     print(prt[l])