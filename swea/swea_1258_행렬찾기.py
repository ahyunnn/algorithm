import sys
sys.stdin = open('input.txt')

def search(i, j):
    global row
    global col

    dr = [0, 0, 1]
    dc = [1, -1, 0]
    arr[i][j] = 0

    for k in range(3):
        if 0 <= i + dr[k] < N and 0 <= j + dc[k] < N and arr[i+dr[k]][j+dc[k]] != 0:
            if i + dr[k] - init_row + 1 >= row:
                row = i + dr[k] - init_row + 1
            if j + dc[k] - init_col + 1 >= col:
                col = j + dc[k] - init_col + 1
            search(i+dr[k], j+dc[k])
    return row, col

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]

    visited = [[0]*N for _ in range(N)]
    cnt = 0
    result = []
    for i in range(N):
        for j in range(N):
            if arr[i][j] != 0:
                cnt += 1
                row = 0
                col = 0
                init_row = i
                init_col = j
                result.append(search(i, j))

    sorted_result = sorted(result, key= lambda x:(x[0]*x[1], x[0]))

    print(f'#{tc}', cnt, end=' ')
    for i in range(len(sorted_result)):
        print(*sorted_result[i], end=' ')
    print()
