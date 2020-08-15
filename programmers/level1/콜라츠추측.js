const solution = (n, loop = 0) => {
  const isEven = n % 2 === 0

  if(loop === 500) return -1
  if(n === 1) return loop

  return isEven ? solution(n/2, ++loop) : solution(n*3+1, ++loop)
}



console.log(
solution(6)	// 8
// ,solution(16) // 4
// ,solution(626331) //-1
)