function solution(s){
  var answer = true;
  let arr = []
  s.split("").forEach((e) => {
      if (e === '(') {
          arr.push('(')
      }
      else {
          arr.pop('(')
      }
  } )

  return arr.length === 0 ? true : false;
}

console.log(solution("(()())"));
