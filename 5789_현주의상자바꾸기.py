import sys
sys.stdin = open('5789_input.txt')

T = int(input())
for tc in range(1, T+1):
    N, Q = map(int, input().split())
    lst = [0] * (N + 1)
    for q in range(1, Q+1):
        L, R = map(int, input().split())

        for i in range(L, R+1):
            lst[i] = q
    print(lst)
    print(f'#{tc}', *lst[1::])

        # print(L, R)