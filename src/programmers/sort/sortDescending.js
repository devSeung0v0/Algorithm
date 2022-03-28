const sortDescending= (num)=> {
  const numToStr =  num + '' //정수를 문자열로 변환(빈 문자열 더해주기)
  const arrTostr = numToStr.split('').sort((a,b)=>b-a).join('') //문자열을 배열로 변환, 내림차순 정렬 후 다시 문자열 변환
  const strToNum = arrTostr * 1 //문자열을 정수로 변환
  return strToNum;
}