//Description
/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */


//Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = function(nums, target) {
  const idx = nums.indexOf(target)
  if(idx === -1){
      nums.push(target)
      nums.sort((a,b)=> a - b)
      return nums.indexOf(target)       
  }else{
      return idx
  }     
  
};
