// 삽입 정렬

function insertionSort(arr) {
  let temp, j; // 5
  for ( let i = 1; i < arr.length; i++ ) {
    temp = arr[i]

    for ( j = i - 1; j >= 0 && temp < arr[j]; j-- ) {
      arr[j + 1] = arr[j] // [6, 6, 1, 2, 4, 3]
    }
    arr[j + 1] = temp // [5, 6, 1, 2, 4, 3]
  }
  return arr
}

console.log(insertionSort([ 6, 5, 1, 2, 4, 3 ]))