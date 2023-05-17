import sys
sys.stdin = open('input.txt')

while True: # break 조건이 걸리기 전까지 계속 진행되는 while문
    n = input()

    if n == "0":
        break

    if n == n[::-1]:
        print('yes')
    else:
        print('no')
