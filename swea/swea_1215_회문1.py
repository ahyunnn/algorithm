import sys
sys.stdin = open('input.txt')

T = 10
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(str, input())) for _ in range(8)]

    # print(arr)
    cnt = 0

    # 행검사
    for i in range(8):
        for j in range(8-N+1):
            check = []
            for k in range(N):
                check.append(arr[i][j+k])

            if check == check[::-1]:
                cnt += 1

    # 열검사
    for i in range(8):
        for j in range(8-N+1):
            check = []
            for k in range(N):
                check.append(arr[j+k][i])

            if check == check[::-1]:
                cnt += 1

    print(f'#{tc} {cnt}')

