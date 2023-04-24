T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]

    # print(N)
    # print(arr)
    # 1. 색깔을 칠할 board 생성
    board = [[0] * 10 for _ in range(10)]
    # print(board)

    # 2. 위치와 색깔 분리해주기
    cnt = 0
    for i in range(N):
        r1 = arr[i][0]
        c1 = arr[i][1]
        r2 = arr[i][2]
        c2 = arr[i][3]
        color = arr[i][4]

        # print(r1, c1, r2, c2, color)
        # 3. 색칠해주기
        for j in range(r1, r2+1):
            for k in range(c1, c2+1):
                if board[j][k] == 0:
                    board[j][k] = color
                elif board[j][k] != 0:
                    board[j][k] += color
                    cnt += 1

    print(f'#{tc} {cnt}')

