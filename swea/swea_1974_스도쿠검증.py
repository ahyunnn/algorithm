import sys
sys.stdin = open('input.txt')

T = int(input())
for tc in range(1, T+1):
    arr = [list(map(int, input().split())) for _ in range(9)]
    num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    # print(arr)
    flag = 0
    # 행검사
    for i in range(9):
        check = []
        for j in range(9):
            check.append(arr[i][j])
            check.sort()

        if num == check:
            continue
        else:
            flag = 1
            break

    # 열검사
    for i in range(9):
        check = []
        for j in range(9):
            check.append(arr[j][i])
            check.sort()

        if num == check:
            continue
        else:
            flag = 1
            break

    # 3*3검사
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            check = []
            for k in range(3):
                for l in range(3):
                    ni = i+k
                    nj = j+l

                    if 0 <= ni < 10 and 0 <= nj < 10:
                        check.append(arr[ni][nj])
                        check.sort()

            if num == check:
                continue
            else:
                flag = 1
                break

    if flag == 0:
        ans = 1
    else:
        ans = 0
    print(f'#{tc} {ans}')