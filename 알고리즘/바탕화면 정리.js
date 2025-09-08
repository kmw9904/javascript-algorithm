function solution(wallpaper) {
  var answer = [];

  // 첫번째 y 좌표
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      answer.push(i);
      break;
    }
  }

  // 첫번째 x 좌표
  let x1route = false;
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper.length; j++) {
      if (wallpaper[j][i] == "#") {
        answer.push(i);
        x1route = true;
        break;
      }
    }

    if (x1route) {
      break;
    }
  }

  // 두번째 y 좌표
  let y2 = wallpaper.length - 1;

  for (y2; y2 >= 0; y2--) {
    if (wallpaper[y2].includes("#")) {
      answer.push(y2 + 1);
      break;
    }
  }

  // 두번째 x 좌표
  let x2route = false;
  let x2 = wallpaper[0].length - 1
  for (x2 ;x2 >= 0; x2--) {
    for (let j = 0; j < wallpaper.length; j++) {
      if (wallpaper[j][x2] == "#") {
        answer.push(x2 + 1);
        x2route = true;
        break;
      }
    }
    if (x2route) {
      break;
    }
  }
  return answer;
}

solution([".#...", "..#..", "...#."]);
