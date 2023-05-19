import sys
sys.stdin = open('input.txt')

n, m = list(map(int, input().split())) # n : 행, m : 열
board = []
result = []


for _ in range(n):
    board.append(input())

for i in range(n-7):
    for j in range(m-7):
        w_ch = 0 # 흰색으로 시작 (짝수 자리는 모두 흰색)
        b_ch = 0 # 검은색으로 시작 (짝수 자리는 모두 검은색)
        for k in range(i, i+8):
            for l in range(j, j+8):
                # 짝수일 때
                if (k+l) % 2 == 0:
                    if board[k][l] != "W": # 경우 1
                        w_ch += 1 # 흰색으로 칠해줘야함
                    else: # 경우 2
                        b_ch += 1
                else:
                    if board[k][l] != "B":  # 경우 1
                        w_ch += 1
                    else: # 경우 2
                        b_ch += 1
        result.append(w_ch)
        result.append(b_ch)

print(min(result))