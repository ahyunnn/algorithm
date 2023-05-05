import sys
sys.stdin = open("input.txt")

N = int(input())
stack = []
for _ in range(N):
    # lst = list(map(str, input().split()))
    lst = list(sys.stdin.readline().split())

    for i in lst:
        if i == "push":
            stack.append(lst[1])

        elif i == "pop":
            if stack:
                print(stack[-1])
                stack.pop()
            else:
                print(-1)

        elif i == "size":
            print(len(stack))

        elif i == "empty":
            if stack:
                print(0)
            else:
                print(1)

        elif i == "top":
            if stack:
                print(stack[-1])
            else:
                print(-1)