/* 문자열의 길이 계산하기 */

// console.log(strLength('Andrea'))
function strLength(str) {
  if(typeof(str) !== 'string') return 0;
  if(str.substring(1) === '') return 1;

  return 1 + strLength(str.substring(1))
}

/* 문자열 하나씩 출력 */

// printChars('Andrea')
function printChars(str) {
  if(typeof(str) !== 'string') return;
  if(str.length === 0) return;
  console.log(str.charAt(0))
  return printChars(str.substring(1))
}

/* 문자열 역순으로 하나씩 출력 */

printCharsReverse('Andrea')
function printCharsReverse(str) {
  if(typeof(str) !== 'string') return;
  if(str === '') return
  printCharsReverse(str.substring(1))
  console.log(str.charAt(0))
}