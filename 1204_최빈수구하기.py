import sys
sys.stdin = open('1204_input.txt')

T = int(input())
for _ in range(1, T+1):
    tc = int(input())
    lst = list(map(int, input().split()))

    # print(tc)
    # print(lst)
    score = [0] * 101

    for i in range(1000):
        score[lst[i]] += 1

    max_value = 0
    for i in range(100):
        if score[i] >= max_value:
            max_value = score[i]
            max_idx = i

    print(f'#{tc} {max_idx}')