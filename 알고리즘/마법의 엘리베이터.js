function solution(storey) {
  const arr = String(storey).split("").map(Number).reverse();
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      if (arr[i] === 10) {
        total += 1;
        break;
      }

      if (arr[i] > 5) {
        while (arr[i] < 10) {
          arr[i] += 1;
          total += 1;
        }
        total += 1;
      } else {
        total += arr[i];
      }
      break;
    }

    if (arr[i] === 10) {
      arr[i + 1] += 1;
      continue;
    }

    if (arr[i] === 0) {
      continue;
    }

    if (arr[i] > 5) {
      while (arr[i] < 10) {
        arr[i] += 1;
        total += 1;
      }

      if (arr[i] === 10) {
        arr[i + 1] += 1;
      }
    } else if (arr[i] < 5) {
      while (arr[i] > 0) {
        arr[i] -= 1;
        total += 1;
      }
    } else {
      if (arr[i + 1] >= 5) {
        while (arr[i] < 10) {
          arr[i] += 1;
          total += 1;
        }
        if (arr[i] === 10) {
          arr[i + 1] += 1;
        }
      } else {
        while (arr[i] > 0) {
          arr[i] -= 1;
          total += 1;
        }
      }
    }
  }
  return total;
}

solution(15555);
