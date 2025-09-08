function bfs(y, x, maps, visited , count) {
    visited[y][x] = true
    const q = [[y,x,count += Number(maps[y][x])]]
    
    let mx_count = -1
    
    while (q.length > 0) {
        let [cy, cx, cnt] = q.shift()
        
        if (cnt > mx_count) {
            mx_count = cnt
        }
        
        for (let [dy, dx] of [[1,0], [-1,0], [0,1], [0,-1]]) {
            const ny = cy + dy
            const nx = cx + dx
            
            if (ny < 0 || ny >= maps.length || nx < 0 || nx >= maps[0].length || maps[ny][nx] === 'X') {
                continue
            }
            
            if (!visited[ny][nx]) {
                visited[ny][nx] = true
                q.push([ny, nx, cnt += Number(maps[ny][nx])])
            }
        }
    }
    
    return mx_count
}

function solution(maps) {
    var answer = [];
    // 세로
    const n = maps.length
    // 가로
    const m = maps[0].length
    const visited = Array.from({length : n}, ()=> Array.from({length : m}).fill(false))
    
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                const result = bfs(i,j,maps,visited, 0)
                answer.push(result)
            }
        }
    }
    return answer;
}

solution(["X591X", "X1X5X", "X231X", "1XXX1"]);
