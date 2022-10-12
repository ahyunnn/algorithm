import sys
sys.stdin = open('input.txt')

T = int(input())
for tc in range(1, T+1):
    n, m = map(int, input().split())
    first = list(map(int, input().split()))
    second = list(map(int, input().split()))

    result = []

    if n > m:  # first가 더 긴쪽

        for i in range(n-m+1):
            sum = 0
            for j in range(m):
                sum += first[i+j] * second[j]

            result.append(sum)
    # print(result)
    else:   # second가 더 긴쪽

        for i in range(m-n+1):
            sum = 0
            for j in range(n):
                sum += second[i+j] * first[j]

            result.append(sum)

    print(f'#{tc} {max(result)}')



