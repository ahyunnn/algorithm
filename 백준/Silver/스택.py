import sys
sys.stdin = open('input.txt')

T = int(input())
stack = []

for _ in range(T):
    lst = list(sys.stdin.readline().split())
    # print(lst)
    order = lst[0]
    # print(order)

    if order == 'push':
        stack.append(lst[1])

    elif order == 'pop':
        if stack:
            a = stack.pop()
            print(a)
        else:
            print('-1')

    elif order == 'size':
        print(len(stack))

    elif order == 'empty':
        if stack:
            print('0')
        else:
            print('1')

    elif order == 'top':
        if stack:
            print(stack[-1])
        else:
            print('-1')