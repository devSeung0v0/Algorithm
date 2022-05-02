//question
// : Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
//https://leetcode.com/problems/number-of-1-bits/

const hammingWeight = (n)=>{
  const count = n.toString(2).split(1).length -1
  return count

};