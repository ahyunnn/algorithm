import sys
sys.stdin = open('input.txt')

T = 10
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))

    cnt = 0
    while cnt != N:
        # 계속 sort해주기
        lst.sort()
        # 맨앞에 있는 수는 계속 +1
        lst[0] += 1
        # 맨뒤에 있는 수는 계속 -1
        lst[-1] -= 1
        # 횟수 세주기
        cnt += 1

    lst.sort()
    result = lst[-1] - lst[0]

    print(f'#{tc} {result}')