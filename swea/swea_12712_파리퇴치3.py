import sys
sys.stdin = open('swea_12712_input.txt')

T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]

    dr1 = [0, 1, 0, -1]
    dc1 = [1, 0, -1, 0]
    dr2 = [1, 1, -1, -1]
    dc2 = [1, -1, -1, 1]

    max_val = 0
    sum_val1 = 0
    for i in range(N):
        for j in range(N):
            sum_val1 = arr[i][j]
            for m in range(1, M):
                for n in range(4):
                    ni = i + dr1[n] * m
                    nj = j + dc1[n] * m
                    if 0 <= ni < N and 0 <= nj < N:
                        sum_val1 += arr[ni][nj]

            if sum_val1 > max_val:
                max_val = sum_val1

    sum_val2 = 0
    for i in range(N):
        for j in range(N):
            sum_val2 = arr[i][j]
            for m in range(1, M):
                for n in range(4):
                    ni = i + dr2[n] * m
                    nj = j + dc2[n] * m
                    if 0 <= ni < N and 0 <= nj < N:
                        sum_val2 += arr[ni][nj]

            if sum_val2 > max_val:
                max_val = sum_val2

    print(f'#{tc} {max_val}')

