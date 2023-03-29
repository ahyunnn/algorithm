def dfs(v):
    # 현재 노드를 방문 처리
    visited[v] = 1
    for i in graph[v]:
        if visited[i]:
            continue
        dfs(i)

T = int(input())                       # 컴퓨터 개수
S = int(input())                       # 연결된 컴퓨터 쌍의 개수
graph = [[] for _ in range(T + 1)]     # 방문 여부 체크
visited = [0] * (T+1)
for _ in range(S):
    N, M = list(map(int, input().split()))

    # 인접리스트 표시
    graph[N].append(M)
    graph[M].append(N)

dfs(1)

print(sum(visited)-1)
