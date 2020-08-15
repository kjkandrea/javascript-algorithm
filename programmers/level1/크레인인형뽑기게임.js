// 진입 점
const solution = (boardArr, moveArr) => {
  const pickArr = pick(boardArr, moveArr)
  return cacul(pickArr)
}

// 점수 계산
const cacul = (array, score = 0) => {
  const isScore = array.some((val, idx, arr) => {
    //console.log(array)
    const reverseIdx = (arr.length - 1) - idx
    if (array[reverseIdx] === array[reverseIdx - 1]) {
      array.splice(reverseIdx - 1, 2)
      return true
    }
  })

  if(!isScore) {
    return score
  } else {
    score += 2
    return cacul(array, score)
  }
}

// 후보군 선택
const pick = (boardArr, moveArr) => {
  let result = []
  moveArr.map(position => {
    boardArr.some((_, idx) => {
      const pickValue = boardArr[idx][position - 1]
      if (pickValue !== 0) {
        result.push(pickValue)
        boardArr[idx][position - 1] = 0
        return true
      }
    })
  })
  return result
}

const boards = [
  [0,0,0,0,0,0],
  [0,0,1,0,3,3],
  [0,2,5,0,1,1],
  [4,2,4,4,2,2],
  [3,5,1,3,1,5]
]

const boards2 = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]
]

const moves = [5,6,3,5,2,2,1,4]

const moves2 = [1,5,3,5,1,2,1,4]

const pick2 = [4,3,1,1,3,2,0,4]

console.log(solution(boards2, moves2))