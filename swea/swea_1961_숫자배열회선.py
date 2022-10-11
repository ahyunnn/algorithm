import sys
sys.stdin = open('input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]

    # print(arr)
    arr_90 = [[0] * N for _ in range(N)]
    arr_180 = [[0] * N for _ in range(N)]
    arr_270 = [[0] * N for _ in range(N)]

    # 90도 회전
    for i in range(N):
        for j in range(N):
            arr_90[i][j] = arr[N-j-1][i]
    # print(arr_90)

    # 180도 회전
    for i in range(N):
        for j in range(N):
            arr_180[i][j] = arr_90[N-j-1][i]
    # print(arr_180)

    # 270도 회전
    for i in range(N):
        for j in range(N):
            arr_270[i][j] = arr_180[N-j-1][i]
    # print(arr_270)

    print(f'#{tc}')
    for i in range(N):
        print(''.join(list(map(str, arr_90[i]))), end=' ')
        print(''.join(list(map(str, arr_180[i]))), end=' ')
        print(''.join(list(map(str, arr_270[i]))))