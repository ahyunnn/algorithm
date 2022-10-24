import sys
sys.stdin = open('input.txt')

arr = [list(map(int, input().split())) for _ in range(9)]
# print(arr)
max_num = 0
for i in range(9):
    for j in range(9):
        if arr[i][j] > max_num:
            max_num = arr[i][j]

row = 0
col = 0
for i in range(9):
    for j in range(9):
        if arr[i][j] == max_num:
            row = i
            col = j

print(max_num)
print(row+1, end=' ')
print(col+1)