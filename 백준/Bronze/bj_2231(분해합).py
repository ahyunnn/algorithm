import sys
sys.stdin = open('input.txt')

n = int(input())

for i in range(1, n+1):
    num = sum(list(map(int, str(i))))   # num : i의 각 자리합
    total = num + i                     # total : 분해합 (생성자 + 각 자리 합)

    if total == n:  # 생성자가 있는 경우 (작은 수부터 들어가므로 처음으로 값이 같을 때가 가장 작은 생성자)
        print(i)
        break

    if i == n:  # 생성자가 없는 경우 ( 분해합과 생성자가 같을 수 없음 )
        print(0)
