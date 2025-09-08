function solution(edges) {
  // 정답
  let answer = new Array(4).fill(0);

  // 나간 갯수 들어온 간선 갯수 세기
  let graph = {};
  for (const [a, b] of edges) {
    if (!graph[a]) {
      graph[a] = [0, 0];
    }
    if (!graph[b]) {
      graph[b] = [0, 0];
    }
    graph[a][0]++;
    graph[b][1]++;
  }

  // 정점 구하기
  for (const key in graph) {
    if (graph[key][0] >= 2 && graph[key][1] === 0) {
      answer[0] = Number(key);
      break;
    }
  }

  // 정점에서 뻗어나간 그래프의 수
  let total = graph[answer[0]][0];

  for (const [a, b] of edges) {
    if (a !== answer[0]) continue;
    graph[b][1]--;
  }
  for (const key in graph) {
    if (graph[key][0] === 0 && graph[key][1] >= 0) {
      answer[2]++;
    } else if (graph[key][0] === 2 && graph[key][1] === 2) {
      answer[3]++;
    }
  }
  answer[1] = total - (answer[2] + answer[3]);
  return answer;
}
