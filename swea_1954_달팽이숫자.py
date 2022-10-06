import sys
sys.stdin = open('swea_1954_input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [[0] * N for _ in range(N)]

    dr = [0, 1, 0, -1]
    dc = [1, 0, -1, 0]
    row = 0
    col = 0
    next_row = 0
    next_col = 0
    num = 1
    dir = 0

    for _ in range(N*N):
        row = next_row
        col = next_col

        arr[row][col] = num

        next_row = row + dr[dir]
        next_col = col + dc[dir]

        if next_row < 0 or next_row >= N or next_col < 0 or next_col >= N or arr[next_row][next_col] != 0:
            if dir == 3:
                dir = 0
            else:
                dir += 1

            next_row = row + dr[dir]
            next_col = col + dc[dir]

        num += 1
    print(f'#{tc}')
    for i in arr:
        print(*i)