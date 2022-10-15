import sys
sys.stdin = open('사냥꾼_input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]

    dr = [0, 1, 0, -1, 1, 1, -1, -1]
    dc = [1, 0, -1, 0, 1, -1, -1, 1]
    for i in range(N):
        for j in range(N):
            if arr[i][j] == 1:   # 사냥꾼이면

                for k in range(8):
                    for l in range(1, N+1):
                        nxt_row = i + dr[k] * l
                        nxt_col = j + dc[k] * l

                        if 0 <= nxt_row < N and 0 <= nxt_col < N:

                            if arr[nxt_row][nxt_col] == 2: # 토끼면
                                arr[nxt_row][nxt_col] = 4

                            elif arr[nxt_row][nxt_col] == 1: # 사냥꾼이면
                                break

                            elif arr[nxt_row][nxt_col] == 3: # 바위이면
                                break

    cnt = 0
    for i in range(N):
        for j in range(N):
            if arr[i][j] == 4:
                cnt += 1

    print(f'#{tc} {cnt}')