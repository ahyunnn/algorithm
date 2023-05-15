import sys
sys.stdin = open('input.txt')

n, m = map(int, input().split())
lst = list(map(int, input().split()))

answer = 0

for i in range(n-2):                        # 첫번째 인덱스 : 0 ~ n-3
    for j in range(i+1, n-1):               # 두번째 인덱스 : 첫번째 자리 +1 ~ n-2
        for k in range(j+1, n):             # 세번째 인덱스 : 두번째 자리 +1 ~ n-1
            sum = lst[i] + lst[j] + lst[k]

            if (sum <= m and sum > answer): # m을 넘지 않고, 최대한 m에 가깝게 하기 위한 조건
                answer = sum

print(answer)
