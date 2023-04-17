n = int(input())
lst = list(map(int, input().split()))
max_num = lst[0]
min_num = lst[0]

for i in lst[1:]:
    if i > max_num:
        max_num = i
    elif i < min_num:
        min_num = i

print(min_num, max_num)