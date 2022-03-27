const reverseNum = (n)=>{
    
  let answer =n.toString().split('').reverse().map((num) => parseInt(num))
  return answer 
}