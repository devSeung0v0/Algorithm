const findTheDifference= (s, t)=>{
  const sArr = s.split('').sort()//문자열을 배열로 바꿔서 정렬시키기
  const tArr = t.split('').sort()
  for(i=0; i<tArr.length; i++ ){//정렬된 배열의 값을 하나하나 비교해서 같지 않은 값을 반환
      if(sArr[i] !== tArr[i]){
          return tArr[i]
      }
  }
};