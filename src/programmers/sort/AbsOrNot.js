const AbsOrNot = (absolutes, signs)=>{
  let answer = 0
  for(i=0; i<signs.length; i++){
      signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
  }//signs[i]가 true면 answer에 absolutes[i]를 더하여 대입, false면 빼서 대입
  return answer
}