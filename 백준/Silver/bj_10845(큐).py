from collections import deque
import sys
sys.stdin = open('input.txt')

N = int(input())
queue = deque()

for _ in range(N):

    lst = list(map(str, input().split()))
    # lst = sys.stdin.readline().split()

    if lst[0] == "push":
        queue.append(lst[1])

    elif lst[0] == "pop":
        if queue:
            print(queue.popleft())
        else:
            print(-1)

    elif lst[0] == "size":
        print(len(queue))

    elif lst[0] == "empty":
        if queue:
            print(0)
        else:
            print(1)

    elif lst[0] == "front":
        if queue:
            print(queue[0])
        else:
            print(-1)

    elif lst[0] == "back":
        if queue:
            print(queue[-1])
        else:
            print(-1)


