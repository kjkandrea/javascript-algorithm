const solution = (strings, n) => {
  return strings
    .map(val => {
      return val[n] + val
    })
    .sort()
    .map(val => {
      return val.substring(1)
    })
}

console.log (
solution(['sun', 'bed', 'car'], 1) // [car, bed, sun]
)