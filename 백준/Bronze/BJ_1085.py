 # 직사각형에서 탈출
import sys
sys.stdin = open('input.txt')

x, y, w, h = list(map(int, input().split()))

min_val = x

a = w - x
b = h - y

if min_val >= y:
    min_val = y
if min_val >= a:
    min_val = a
if min_val >= b:
    min_val = b

print(min_val)
