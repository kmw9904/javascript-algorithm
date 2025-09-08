function solution(s) {
    let map = {}
    var answer = [];
    
    s.split("").forEach((e, idx) => {
        if (map[e] == undefined) {
            map[e] = idx
            answer.push(-1)
        }
        else {
            answer.push(idx - map[e])
            map[e] = idx
        }
    })
    return answer;
}

solution("aaaaaaaaa", [-1, 1, 1, 1, 1, 1, 1, 1, 1])