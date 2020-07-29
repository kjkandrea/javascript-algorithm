// try hello world -> TrY HeLlO WoRlD

const str = 'try hello world'

function solution(s){
  let answer = s.split(" ").map((v) => {
    let voca = ""
    for (let i = 0;i < v.length;i ++) {
      i % 2 === 0 ? voca += v[i].toUpperCase() : voca += v[i]
    }
    return voca
  })
  return answer.join(" ")
}

console.log(solution(str))