function solution(priorities, location) {
    
  let start = 0
  let arr = [priorities[0]]
  
  
  while (arr.length < priorities.length) {
      start += 1
      start %= priorities.length
      
      if (priorities[start]  <= arr[arr.length-1]) {
          arr.push(priorities[start])
      }
      else {
          arr = []
          arr.push(priorities[start])
      } 
  }
  
  
  return arr;
}

solution([2, 1, 3, 2], 2)