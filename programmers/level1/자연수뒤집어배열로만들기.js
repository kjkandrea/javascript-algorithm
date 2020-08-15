const solution = n => {
  return n.toString().split('').reduceRight((result, val) => {
    result.push(val * 1)
    return result
  }, [])
}

console.log(
  solution(12345)
)