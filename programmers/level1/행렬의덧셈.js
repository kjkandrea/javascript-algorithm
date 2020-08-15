const solution = (arr1, arr2) => {
  return arr1.map((arr, outerIdx) => {
    return arr.map((v, innerIdx) => {
      return v + arr2[outerIdx][innerIdx]
    })
  })
}

// const sumArr = (arr1, arr2) => {
//   return arr1.map((val, idx) => {
//     return val + (arr2[idx] ? arr2[idx] : 0)
//   })
// }

console.log(
//solution([[1,2],[2,3,3]], [[3,4],[5,6]]), 
// [[4,6,3],[7,9]]
solution([[1,2],[2,3]], [[3,4],[5,6]]) 
)