function solution(n, m, section) {
    var answer = 0;
    
    while (section.length !== 0) {
        const q = section.shift()
        
        if (section.length !== 0) {
            while (Math.abs(q - section[0]) < m) {
                section.shift()
            }
        }
        
        answer += 1
    }
    return answer;
}

solution(8,	4,	[2, 3, 6],	2)