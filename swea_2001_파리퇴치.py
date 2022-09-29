import sys
sys.stdin = open('2001_input.txt')

T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())  # N: 배열의 길이, M : 파리채크기
    arr = [list(map(int, input().split())) for _ in range(N)]

    # print(arr)
    max_value = 0
    for i in range(N-M+1):
        for j in range(N-M+1):
            total = 0
            for m in range(M):
                for n in range(M):
                    total += arr[i+m][j+n]


            if total > max_value:
                max_value = total
    print(f'#{tc} {max_value}')

