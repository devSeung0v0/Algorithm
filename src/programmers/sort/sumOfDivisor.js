const SunOfDivisor = (n) => {
  let result = 0
  for(i = 1; i <= n ; i ++){
      if( n % i  === 0){
      result += i // result에 i를 더한 값을 result에 대입한다
      }
  }
  return result 
}