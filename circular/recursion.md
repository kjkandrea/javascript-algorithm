``` javascript
func(4)

function func(n) {
  if (n <= 0) return // Base Case
  console.log('Hello, Recursion %s', n)
  func(n - 1) // Recursive Case
}
```

# 재귀함수 살펴보기

Base Case : 적어도 하나의 재귀에 빠지지않는 케이스가 존재해야 한다.
Recursive Case : 재귀를 반복하다보면 결국 Base Case로 수렴해야 한다.