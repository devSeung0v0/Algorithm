const findTheDifference= (s, t)=>{
  const sArr = s.split('').sort()
  const tArr = t.split('').sort()
  for(i=0; i<tArr.length; i++ ){
      if(sArr[i] !== tArr[i]){
          return tArr[i]
      }
  }
};