import sys
sys.stdin = open('input.txt')

T = int(input())
for tc in range(1, T+1):
    N, K = map(int, input().split())    # N : 가로, 세로 길이, K : 단어의 길이
    arr = [list(map(int, input().split())) for _ in range(N)]

    result = 0  # 최종 값

    # 행 검사
    for i in range(N):
        cnt = 0
        for j in range(N):
            if arr[i][j] == 0:
                cnt = 0

            elif arr[i][j] == 1:
                cnt += 1

                if cnt == K:
                    if j == N-1:
                        result += 1
                    elif arr[i][j+1] == 0:
                        result += 1

    arr_1 = list(zip(*arr))
    # print(arr_1)

    for i in range(N):
        cnt = 0
        for j in range(N):
            if arr_1[i][j] == 0:
                cnt = 0

            elif arr_1[i][j] == 1:
                cnt += 1

                if cnt == K:
                    if j == N-1:
                        result += 1
                    elif arr_1[i][j+1] == 0:
                        result += 1

    print(f'#{tc} {result}')