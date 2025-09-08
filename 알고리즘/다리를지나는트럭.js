function solution(bridge_length, weight, truck_weights) {
  let arr = truck_weights.map((wei) => ({wei, time: 0}))
  var answer = 0;
  
  while (arr.length) {
      const current = arr.shift()
      
      while (current.time < bridge_length) {
          current.time += 1
          answer += 1
          
          if (arr.length) {
              if (current.wei + arr[0].wei <= weight) {
              arr[0].time += 1
              }
          }
          
      }
      
  }
  
  return answer;
}