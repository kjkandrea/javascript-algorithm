// 버블 정렬

function bubbleSort(arr){
  let temp;
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = 0; j < arr.length; j++ ) {
      if (arr[j] > arr[j + 1]) {  // 두 수를 비교하여 앞 수가 뒷 수 보다 크면
        temp = arr[j] // 저장
        arr[j] = arr[j + 1] // 뒷 수를 당기고
        arr[j + 1] = temp // 앞 수를 민다.
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5,3,4,6,2,1]))