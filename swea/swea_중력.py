import sys
sys.stdin = open('sample_input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))

    max_val = 0

    for i in range(N-1):
        cnt = 0
        for j in range(i+1, N):
            if lst[i] > lst[j]:
                cnt += 1
        if cnt > max_val:
            max_val = cnt


    print(f'#{tc} {max_val}')