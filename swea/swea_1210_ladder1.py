import sys
sys.stdin = open('1210_input.txt')

T = 10
for _ in range(1, T+1):
    tc = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]

    for i in range(100):
        for j in range(100):
            if arr[i][j] == 2:
                start_row = i
                start_col = j

    crow = start_row
    ccol = start_col
    dr = [0, 0, -1]
    dc = [-1, 1, 0]
    # 첫번째 줄에 도달할때까지
    while crow != 0:
        # 좌, 우, 위 이동하기
        for i in range(3):
            nrow = crow + dr[i]
            ncol = ccol + dc[i]

            if 0 <= nrow < 100 and 0 <= ncol < 100 and arr[nrow][ncol] == 1:

                arr[crow][ccol] = 0
                crow = nrow
                ccol = ncol

    print(f'#{tc} {ccol}')