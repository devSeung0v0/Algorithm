const sortMyOwn = (strings, n)=>{
  strings.sort()
  strings.sort((a,b)=>{
      if(a[n]===b[n]){
          return 0 //같을 때
      }else if(a[n]>b[n]){
          return 1 // 내림차순
      }else
          return -1 //오름차순
  })
  return strings
}