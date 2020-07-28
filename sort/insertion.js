// 삽입 정렬

const arr = [ 6, 5, 1, 2, 4, 3 ]

function insertionSort(array) {
  let i = 1
  let temp, j

  // outer llop
  // 정렬된 배열을 유지할때 시작 사이즈를 2로 설정 ( 1 -> n )
  for ( i; i < array.length; i++ ) {

    temp = array[i]

    console.log('outer loop %s / array : %s / temp : %s', i, array, temp)

    // inner loop
    // 정렬된 배열을 끝까지 탐색을 안했고 & 현재의 값 보다 더 작으면 -> 왼쪽으로 이동하라
    for ( j = i - 1; j >= 0 && temp < array[j]; j-- ) {

      array[j + 1] = array[j]

      console.log('inner loop %s / array : %s / temp : %s', j, array, temp)
    }
    array[j + 1] = temp
  }
  return array
}

console.log(insertionSort(arr))