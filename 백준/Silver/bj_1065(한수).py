import sys
sys.stdin = open('input.txt')

# 풀이 방법 : 자료형 변환
# 정수 값을 str로 바꿔서 자리 수별로 값을 비교하기

n = int(input())
answer = 0

for i in range(1, n+1):

    if i < 100:
        answer += 1
    else:
        lst = list(map(int, str(i)))
        if lst[2] - lst[1] == lst[1] - lst[0]:
            answer += 1

print(answer)


