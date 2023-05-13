# import sys
# sys.stdin = open('input.txt')
#
# def isPrime(n):
#     for j in range(2, n):
#         if n % j == 0:
#             return False
#         else:
#             return True
#
# n = int(input())
# lst = list(map(int, input().split()))
# answer = 0
#
# for i in range(n):
#     if isPrime(lst[i]):
#         answer += 1
#
# print(answer)

import sys
sys.stdin = open('input.txt')

n = int(input())
lst = list(map(int, input().split()))
answer = 0

for i in lst:
    for j in range(2, i+1):
        if i % j == 0:
            if i == j:
                answer += 1
            break

print(answer)