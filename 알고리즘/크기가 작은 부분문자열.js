function solution(t, p) {
    var answer = 0;
    
    for (let i = 0 ; i  < t.length - p.length; i ++) {
        let num = Number(t.slice(i, i + p.length))
        
        if (num <= Number(p)) {
            answer += 1
        }
    }
    return answer;
}

solution("10203",	"15",	3)