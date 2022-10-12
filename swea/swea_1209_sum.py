import sys
sys.stdin = open('input.txt')

T = 10
for _ in range(1, T+1):
    tc = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]

    max_val = 0
    # 행
    for i in range(100):
        sum_val = 0
        for j in range(100):
            sum_val += arr[i][j]

        if sum_val > max_val:
            max_val = sum_val
    # 열
    for i in range(100):
        sum_val = 0
        for j in range(100):
            sum_val += arr[j][i]

        if sum_val > max_val:
            max_val = sum_val

    # 대각선
    sum_val = 0
    for i in range(100):
        for j in range(100):
            if i == j:
                sum_val += arr[i][j]

    if sum_val > max_val:
        max_val = sum_val

    # 반대각선
    sum_val = 0
    for i in range(100):
        for j in range(100):
            if i + j == 99:
                sum_val += arr[i][j]
    if sum_val > max_val:
        max_val = sum_val

    print(f'#{tc} {max_val}')