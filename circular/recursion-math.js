/* 재귀함수 테스트 */

// func(4)
function func(n) {
  if (n <= 0) return
  console.log('Hello, Recursion %s', n)
  func(n - 1)
}

/* 1 ~ n 까지의 합 */

//console.log(func2(4))
function func2(n) {
  console.log('호출됨. 값 : %s', n)

  if (n <= 0) return n;
  return n + func2(n - 1)
}

/* 팩토리얼 계산하기 */

//console.log(factorial(4))
function factorial(n){
  if(n <= 0) return 1;
  return n * factorial(n - 1)
}

/* 승 계산하기 */

//console.log(power(2, 16))
function power(x, n) {
  if(n <= 0) return 1
  return x * power(x, n - 1)
}

/* 피보나치 수열 계산하기 */

console.log(fibonacci(10))
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n-1) + fibonacci(n-2)
}

/* 최대 공약수 계산하기 */

//console.log(gcd(12, 30))
function gcd(m, n) {
  if (m < n) {
    var tmp = m;
    var m = n
    var n = tmp
  }

  if ( m % n === 0 ) return n;
  return gcd(n, m%n)
}

//console.log(gcd(12, 30))
function gcd2(m, n){
    if (n === 0) return p;
    return gcd2(n, m%n)
}