const solution = x => {
  const y = x.toString().split('').reduce((prev, curr) => Number(prev) + Number(curr))
  return x % y === 0
}

console.log(
  solution(10),	// true
  solution(12),	// true
  solution(11),	// false
  solution(13)	// false
)