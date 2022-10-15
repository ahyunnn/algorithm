import sys
sys.stdin = open('sample_input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(str, input())) for _ in range(N)]

    # print(arr)
    dr = [0, 1, 1, 1]
    dc = [1, 1, 0, -1]

    answer = 'NO'
    for i in range(N):
        for j in range(N):
            if arr[i][j] == 'o':
                for k in range(4):
                    cnt = 1
                    for l in range(1, 5):
                        ni = i + dr[k] * l
                        nj = j + dc[k] * l
                        if 0 <= ni < N and 0 <= nj < N and arr[ni][nj] == 'o':
                            cnt += 1

                            if cnt == 5:
                                answer = 'YES'
                                break


    print(f'#{tc} {answer}')