const solution = (participant, completion) => {
  const c = completion.sort()
  let result = '';
  participant.sort().some((val, idx) => {
    if (val !== c[idx]) {
      result = val
      return true
    }
  })

  return result


  // completion.forEach(value => {
  //   participant.splice(participant.indexOf(value), 1)
  // });

  // console.log(participant[0])
}

console.log (
solution(
  ["mislav", "stanko", "mislav", "ana"],
  ["stanko", "ana", "mislav"]
)
)