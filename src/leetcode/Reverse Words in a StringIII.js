const reverseWords = (s)=>{
  const arr = s.split(' ')
  const reverseWord = arr.map((word)=>{
     return word.split('').reverse().join('')
  })
  return reverseWord.join(' ')
};

reverseWords()