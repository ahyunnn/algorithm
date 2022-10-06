T = int(input())
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(str, input().split()))

    if N % 2 == 0: # 짝수이면
        lst1 = lst[0:(N//2)]
        lst2 = lst[(N//2):N]
    else:
        lst1 = lst[0:(N // 2) + 1]
        lst2 = lst[(N // 2) + 1:N]

    result = []
    for i in range(N//2):
        a = lst1.pop(0)
        result.append(a)
        b = lst2.pop(0)
        result.append(b)

    if lst1:
        result.append(lst1[-1])
    print(f'#{tc}', *result)