import sys
sys.stdin = open('input.txt')

n = int(sys.stdin.readline())
lst = []

for i in range(n):
    lst.append(sys.stdin.readline().strip())

set_lst = set(lst)   # set으로 중복 제거
lst = list(set_lst)  # 리스트로 변환
lst.sort()           # 알파벳 순으로 정렬
lst.sort(key = len)  # 길이 순으로 정렬

for i in lst:
    print(i)