const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const T = Number(input[0])

for (let i = 1; i<=T; i++) {
    const [N, M] = input[i].split(' ').map(Number)
    
    if (N == 0 || M == N) {
        console.log(1)
        continue
    }
    else {
        let n  = 1
        let m = 1
        
        for (let j = 0; j<N; j++) {
            n *= (M - j)
            m *= (j + 1)
        }
        
        console.log(Math.round(n / m))
    }
}