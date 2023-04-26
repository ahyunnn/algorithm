N = int(input())

for tc in range(1, N+1):
    a, b = list(map(int, input().split()))
    result = a + b

    print(f'Case #{tc}: {result}')