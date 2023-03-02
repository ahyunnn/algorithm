N = int(input())

lst = []
for _ in range(N):
    num = int(input())
    lst.append(num)

lst.sort()
# print(lst)

for i in range(N):
    print(lst[i])