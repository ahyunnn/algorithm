import sys
sys.stdin = open('input.txt')

lst = list(map(int, input().split()))
ans = 0

for i in range(len(lst)-1):
    if lst[i] > lst[i+1]:
        ans -= 1
    elif lst[i] < lst[i+1]:
        ans += 1

if ans == 7:
    print("ascending")
elif ans == -7:
    print("descending")
else:
    print("mixed")