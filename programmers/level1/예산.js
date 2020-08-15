const solution = (d, budget) => {
  const arr = d.sort((a,b) => a-b)
  let result = 0

  const enough = arr.some((val, idx) => {
    budget -= val
    console.log(val, idx, budget)
    if (budget < 0) {
      result = idx
      return true
    } else if (budget === 0) {
      result = idx + 1
      return true
    }
  })

  return enough ? result : d.length
}

console.log(
  solution([1,3,2,5,4], 9), // 3
  solution([2,2,3,3], 10), // 4 
  solution([11], 10), // 1
  solution([1,1,1], 10)
)