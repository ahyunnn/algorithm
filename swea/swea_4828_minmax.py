import sys
sys.stdin = open('input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))

    max_val = 0
    for i in range(N):
        if lst[i] > max_val:
            max_val = lst[i]

    min_val = 100000000000000
    for i in range(N):
        if lst[i] < min_val:
            min_val = lst[i]

    result = max_val - min_val

    print(f'#{tc} {result}')
