function solution(info, n, m) {
    const len = info.length;
    const INF = Infinity;

    // dp[i][a] = i번째까지 물건을 처리했을 때 A의 흔적이 a일 때의 B의 최소 흔적
    let dp = Array.from({ length: len + 1 }, () => Array(n).fill(INF));
    dp[0][0] = 0;

    for (let i = 0; i < len; i++) {
        for (let a = 0; a < n; a++) {
            if (dp[i][a] === INF) continue;

            // A가 i번째 물건 훔치는 경우
            let newA = a + info[i][0];
            if (newA < n) {
                dp[i + 1][newA] = Math.min(dp[i + 1][newA], dp[i][a]);
            }

            // B가 i번째 물건 훔치는 경우
            let newB = dp[i][a] + info[i][1];
            if (newB < m) {
                dp[i + 1][a] = Math.min(dp[i + 1][a], newB);
            }
        }
    }

    // 정답: dp[len][a] 중에서 dp[len][a] < m인 a들 중 최소 a
    let result = INF;
    for (let a = 0; a < n; a++) {
        if (dp[len][a] < m) {
            result = Math.min(result, a);
        }
    }

    return result === INF ? -1 : result;
}
