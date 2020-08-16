// 모체
const solution = (n, arr1, arr2) => {
  const leftArr = toBinaryArray(n, arr1)
  const rightArr = toBinaryArray(n, arr2)
  return joinArr(leftArr, rightArr)
}

// 이진수 배열을 합쳐서 결과를 리턴하는 함수
const joinArr = (arr1, arr2) => {
  return arr1.map((numbers, outerIdx) => {
    const result = numbers.map((num, innerIdx) => {
      if (num === '0') {
        if (num === arr2[outerIdx][innerIdx]) return ' ';
        return '#';
      }
      return '#';
    })
    return result.join('')
  })

}

// 이진수 배열로 변환
const toBinaryArray = (n, arr) => {
  return arr.map((v) => {
    let result = v.toString(2)
    const spare = n - result.length

    if (spare) {
      for(let i = 0; i < spare;i++) {
        result = '0' + result 
      }
      return result.split('')
    }

    return result.split('')
  })
}


solution(
  5,
  [9, 20, 28, 18, 11],
  [30, 1, 21, 17, 28]
)