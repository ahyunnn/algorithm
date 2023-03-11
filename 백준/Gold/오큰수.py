import sys
sys.stdin = open('input.txt')

T = int(input())
lst = list(map(int, input().split()))
answer = []

for i in range(T):
    check = lst[i]

    # 만약 마지막 값이면 오른쪽에 더 이상 값이 없으므로 -1을 넣어준다
    if i == T-1:
        answer.append(-1)

    # 선택한 위치와 오른쪽에 있는 값들을 비교하기
    max_val = check

    # 만약 해당 위치보다 큰 값을 찾았다면 answer에 넣고, 바로 break
    for j in range(i+1, T):
        if lst[j] > max_val:
            answer.append(lst[j])
            break

    # 예외) 첫번째 값이 가장 큰 값이라면?
    if max_val == lst[0]:
        answer.insert(0, -1)

print(*answer)