import sys
sys.stdin = open('s_input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())

    bus_stop = [0] * 10

    for _ in range(N):
        A, B = map(int, input().split())
        for i in range(A, B+1):
            bus_stop[i] += 1

    P = int(input())
    result = []
    for _ in range(P):
        C = int(input())
        result.append(bus_stop[C])

    print(f'#{tc}', *result)

