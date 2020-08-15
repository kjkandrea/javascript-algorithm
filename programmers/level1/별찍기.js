function solution (w, h) {
  let result = ''
  let line = ''
  for (let i = 0;i < w;i++){
    line += '*'
  }
  for (let i = 0;i < h;i++){
    if (i === h - 1) {
      result += line
      break
    }
    result += `${line}\n`
  }

  return result
}


console.log(
solution(10,10)
)

/*
result : (5, 3)
*****
*****
*****
*/