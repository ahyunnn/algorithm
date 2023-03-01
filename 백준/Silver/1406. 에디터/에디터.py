import sys

sent = list(sys.stdin.readline().rstrip())
sent_2 = []
N = len(sent)
M = int(input())

# print(sent)

for _ in range(M):
    order = list(sys.stdin.readline().split())
    # print(order)
    if order[0] == "L" and sent:
        sent_2.append(sent.pop())
    
    elif order[0] == "D" and sent_2:
        sent.append(sent_2.pop())
    
    elif order[0] == "B" and sent:
        sent.pop()

    elif order[0] == "P":
        sent.append(order[1])

print("".join(sent + list(reversed(sent_2))))
        
