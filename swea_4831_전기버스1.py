import sys
sys.stdin = open('swea_4831_input.txt')

T = int(input())
for tc in range(1, T+1):
    K, N, M = map(int, input().split())
    lst = list(map(int, input().split()))

    stop = [0] * (N+1)

    for i in lst:
        stop[i] = 1

    cnt = 0
    start = 0
    end = N

    # start가 end보다 작은 동안
    while start < end:
        # start에서 K만큼 떨어진 곳에 충전소가 있을때
        if start + K >= N:
            break
        if stop[start+K] == 1:
            cnt += 1
            start += K
        # start에서 K보다 적은 거리에 충전소가 있을때
        elif 1 in stop[start+1:start+K]:
            for j in range(K-1, 0, -1):
                if start + j > end:
                    break
                if stop[start+j] == 1:
                    cnt += 1
                    start += j
                    break
        # start에서 K보다 먼 거리에 충전소가 있을때
        else:
            cnt = 0
            break

    print(f'#{tc} {cnt}')