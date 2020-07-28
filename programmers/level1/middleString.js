// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

const string = 'qxr'
const string2 = 'qwxxrs'

function middleString(s) {
  let answer = '';
  const middleLength = s.length/2
  
  // 짝수 인 경우
  if(middleLength === Math.floor(middleLength)) {
    answer += s[middleLength - 1]
    answer += s[middleLength]
  } 
  // 홀수 인 경우
  else {
    answer += s[Math.floor(middleLength)]
  }

  // 짝수 일 경우
  
  
  return answer;
}

function shortCut(s) {
  const mid = Math.floor(s.length/2)
  return s.length % 2 === 1 ? s[mid] : s[mid-1] + s[mid];
}

console.log(middleString(string))
console.log(middleString(string2))

console.log(shortCut(string))
console.log(shortCut(string2))