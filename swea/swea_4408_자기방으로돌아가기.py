import sys
sys.stdin = open('sample_input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())

    corr = [0] * 201

    for _ in range(N):
        frm, to = map(int, input().split())

        if frm <= to:
            start = (frm-1)//2
            end = (to-1)//2
        else:
            start = (to-1)//2
            end = (frm-1)//2

        for idx in range(start, end+1):
            corr[idx] += 1

    max_val = 0
    for i in corr:
        if max_val < i:
            max_val = i
    print(f'#{tc} {max_val}')