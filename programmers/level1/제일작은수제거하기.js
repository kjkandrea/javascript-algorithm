const solution = arr => {
  if (arr.length === 1) return [-1]
  const minNumber = arr.concat().sort((a, b) => b - a)[arr.length - 1]
  arr.splice(arr.indexOf(minNumber), 1)
  return arr
}

console.log(
  solution([1,4,3,2])
)