function solution(sequence, k) {
  var answer = [];
  let left = 0;
  let right = 0;
  const ln = sequence.length;
  let result = sequence[0];

  while (left < ln && right < ln) {
    if (result < k) {
      right++;
      result += sequence[right];
    } else if (result > k) {
      result -= sequence[left];
      left++;
    } else if (result == k) {
      if (answer.length > 1 && answer[1] - answer[0] > right - left) {
        answer[0] = left;
        answer[1] = right;
      } else if (answer.length == 0) {
        answer.push(left);
        answer.push(right);
      }

      right++;
      result += sequence[right] - sequence[left];
      left++;
    }
  }
  return answer;
}
solution([1, 1, 1, 2, 3, 4, 5], 5);
