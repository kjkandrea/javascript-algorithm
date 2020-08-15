const solution = (n, lost, reverve) => {
  const ohNo = lost
    .filter((value) => {
      const my = reverve.indexOf(value)
      if (my !== -1) {
        reverve.splice(my, 1)
        return false
      } else {
        return value
      }
    })
    .filter((value) => {
      const prev = reverve.indexOf(value - 1)
      const next = reverve.indexOf(value + 1)
      if (prev !== -1) {
        reverve.splice(prev, 1)
      } else if (next !== -1) {
        reverve.splice(next, 1)
      } else {
        return value
      }
    })

  return n - ohNo.length
}

solution(5, [2, 3], [3, 4]) // 3

//solution(5, [2,4], [1,3,5]) // 5

//solution(5, [2,4], [3]) // 4

//solution(3, [3], [1]) // 2