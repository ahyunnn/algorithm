import sys
sys.stdin = open('쉬운거스름돈_input.txt')

T = int(input())
for tc in range(1, T+1):
    n = int(input())

    lst = [50000, 10000, 5000, 1000, 500, 100, 50, 10]

    result = []

    for i in range(len(lst)):
        if n >= lst[i]:
            ans = n // lst[i]
            result.append(ans)
            n = n - ((n//lst[i])*lst[i])
        else:
            result.append(0)

    print(f'#{tc}')
    print(*result)

