function check(i, j, char, board) {
  let result = false;

  result = checkRow(i, char, board);

  if (result) return result;

  result = checkColumn(j, char, board);

  if (result) return result;

  if (i === 0 && j === 0) {
    result = checkCross(char, board);
    if (result) return result;
  }

  if (i === 0 && j === 2) {
    result = chechCross2(char, board);
    if (result) return result;
  }

  return result;
}

function chechCross2(char, board) {
  let result = false;

  let count = 0;
  for (let y = 2; y >= 0; y--) {
    if (board[y][y] === char) {
      count += 1;
    }
  }

  if (count === 3) {
    result = true;
    return result;
  } else {
    return result;
  }
}

function checkCross(char, board) {
  let result = false;

  let count = 0;
  for (let y = 0; y < 3; y++) {
    if (board[y][y] === char) {
      count += 1;
    }
  }

  if (count === 3) {
    result = true;
    return result;
  } else {
    return result;
  }
}

function checkRow(i, char, board) {
  let result = false;

  let count = 0;
  for (let x = 0; x < 3; x++) {
    if (board[i][x] === char) {
      count += 1;
    }
  }

  if (count === 3) {
    result = true;
    return result;
  } else {
    return result;
  }
}

function checkColumn(j, char, board) {
  let result = false;

  let count = 0;
  for (let y = 0; y < 3; y++) {
    if (board[y][j] === char) {
      count += 1;
    }
  }

  if (count === 3) {
    result = true;
    return result;
  } else {
    return result;
  }
}

function solution(board) {
  var answer = -1;
  let o_result = false;
  let x_result = false;
  let result_cnt = 0;
  let o_count = 0;
  let x_count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") {
        o_count += 1;
        let checked = check(i, j, board[i][j], board);
        if (checked) {
          o_result = true;
          result_cnt += 1;
        }
      } else if (board[i][j] === "X") {
        x_count += 1;
        let checked = check(i, j, board[i][j], board);
        if (checked) {
          x_result = true;
        }
      }
    }
  }

  if (x_result === true && o_result === true) {
    return 0;
  }

  if (x_result === true) {
    if (x_count === o_count) {
      return 1;
    } else {
      return 0;
    }
  }

  if (o_result === true) {
    if (o_count - x_count === 1) {
      return 1;
    } else {
      return 0;
    }
  }

  if (x_result === false && o_result === false) {
    if ((x_count + o_count === 9) | (x_count === o_count)) {
      return 1;
    } else {
      return 0;
    }
  }
}

solution(["OOO", "XOX", "XXO"]);
