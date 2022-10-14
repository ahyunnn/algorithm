import sys
sys.stdin = open('s_input.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))

    max_value = -1
    for i in range(N-1):
        for j in range(i+1, N):
            num = lst[i]*lst[j]
            num_lst = list(str(num))

            for k in range(len(num_lst)-1):
                if int(num_lst[k]) > int(num_lst[k+1]):
                    break
            else:
                if int(num) > max_value:
                    max_value = int(num)

    print(f'#{tc} {max_value}')