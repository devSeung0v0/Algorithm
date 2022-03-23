const dividerZero = (arr,divider)=>{
  let answer = []
    arr.map((num) => {
    num % divisor === 0 && answer.push(num) // &&연산자 : 앞의 값이 true면 무조건 뒤의 값을 반환
    })
    return answer.length ? answer.sort((a,b)=> a-b) : [-1] // answer에 요소가 있다면 오름차순 정렬, 없다면 [-1]를 반환
}