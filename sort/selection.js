function selectionSort(arr) {
  let min, minIdx;

  for( let i = 0;i < arr.length - 1;i++ ) {
    minIdx = i
    for (let j = i + 1;j < arr.length;j++ ) {
      if ( arr[j] < arr[minIdx] ) {
        minIdx = j
      }
    }
    min = arr[minIdx]
    arr[minIdx] = arr[i]
    arr[i] = min
  }
  return arr
}

console.log(selectionSort([6,5,3,2,4,1,7,9,8]))