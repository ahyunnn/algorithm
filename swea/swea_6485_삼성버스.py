import sys
sys.stdin = open('6458_input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())                        # 버스 노선 개수
    bus_stop = [0] * 5001

    for i in range(N):
        A, B = map(int, input().split())    # i번째 노선은 번호가 A이상 B이하
        for j in range(A, B+1):
            bus_stop[j] += 1
    # print(bus_stop)

    print(f'#{tc}', end= ' ')
    P = int(input())                        # P : 버스정류장 개수
    for _ in range(P):
        C = int(input())                    # C : 버스정류장 이름
        print(bus_stop[C], end=' ')
    print()

