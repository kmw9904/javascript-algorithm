// 조합 만들기
function getCombinations(arr, k) {
  const results = [];

  function backtrack(start, path) {
    if (path.length === k) {
      results.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return results;
}

function countInterSection(arr1, arr2) {
  const set = new Set(arr1);

  return arr2.filter((n) => set.has(n)).length;
}

function solution(n, q, ans) {
  var answer = 0;

  const arr = Array.from({ length: n }, (_, i) => i + 1);

  const combinations = getCombinations(arr, 5);

  for (let combination of combinations) {
    let isValid = true;

    for (let i = 0; i < ans.length; i++) {
      if (countInterSection(combination, q[i]) !== ans[i]) {
        isValid = false;
        break
      }
    }

    if (isValid) answer++;
  }

  return answer;
}
