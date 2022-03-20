const CountPy = (s) => {
  const pCount = s.toUpperCase().split('P').length
  const yCount = s.toUpperCase().split('Y').length
   return  pCount === yCount ? true : false

}