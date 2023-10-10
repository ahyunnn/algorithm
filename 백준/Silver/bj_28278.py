import sys
input = sys.stdin.readline # 런타임에러가 나기 때문에 이렇게 바꿔주기

n = int(input())
stack = []

for _ in range(n):

  inp = sys.stdin.readline().split()

  if inp[0] == '1':
    stack.append(inp[1])
    
  elif inp[0] == '2':
    if stack: 
      print(stack.pop())
    else:
      print(-1)

  elif inp[0] == '3':
    print(len(stack))

  elif inp[0] == '4':
    if stack:
      print(0)
    else:
      print(1)

  elif inp[0] == '5':
    if stack:
      print(stack[-1])
    else:
      print(-1)
