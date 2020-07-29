function mergeSort(arr) {
  if(arr.length < 2) return arr;

  const pivot = Math.floor(arr.length/2)
  const left = arr.slice(0, pivot) // 쪼갠 왼쪽
  const right = arr.slice(pivot, arr.length) // 쪼갠 오른쪽
  console.log(left, right)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length)  {
    if(left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result;
}

console.log(mergeSort([5,2,4,6,1,3,7,8]))