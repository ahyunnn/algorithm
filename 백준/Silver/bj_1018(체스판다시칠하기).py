import sys
sys.stdin = open('input.txt')

n, m = list(map(int, input().split())) # n : 행, m : 열
board = []
result = []

for _ in range(n):
    board.append(input())

    for i in range(n-7):
        for j in range(m-7):
            w_st = 0
            b_st = 0
            for k in range(i, i+8):
                for l in range(j, j+8):
                    if (k+l)%2 == 0:
                        if board[k][l] != "W":
                            w_st += 1
                        else:
                            b_st += 1
                    else:
                        if board[k][l] != "W":
                            b_st += 1
                        else:
                            w_st += 1
            result.append(w_st)
            result.append(b_st)

    print(min(result))

