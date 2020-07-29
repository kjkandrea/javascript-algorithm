function solution(s) {
  console.log(s)
  if(Number(s) % 1 != 0) {
      return false;
  }
  if(s.length === 4) {
      return true;
  } else if(s.length === 6) {
      return true;
  }
  
  return false;
}

console.log(solution("156a"))