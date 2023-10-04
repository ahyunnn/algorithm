T = int(input())
arr = [[0]*100 for _ in range(100)]
for _ in range(T):
    garo, sero = map(int, input().split())

    for i in range(garo, garo+10):
        for j in range(sero, sero+10):
            arr[i][j] = 1

sum_val = 0
for i in range(100):
    for j in range(100):
        if arr[i][j] == 1:
            sum_val += 1

print(sum_val)