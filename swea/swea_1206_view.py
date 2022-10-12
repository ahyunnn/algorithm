import sys
sys.stdin = open('input.txt')

T = 10
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))

    cnt = 0
    for i in range(2, N-2):
        check = max(lst[i-2], lst[i-1], lst[i+1], lst[i+2])
        if lst[i] - check > 0:
            cnt += lst[i] - check
        else:
            continue

    print(f'#{tc} {cnt}')