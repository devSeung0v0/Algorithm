const isPalindrome = (x)=>{
  const r = x.toString().split('').reverse().join('')
  return x==r?true:false
}