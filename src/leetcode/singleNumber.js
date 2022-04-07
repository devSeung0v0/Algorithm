const singleNumber = (nums)=>{
  nums.sort()//오름차순 정렬 후에
  for(let i = nums.length -2; i >= 0; i--){//배열 마지막 전 값부터 for문 돌려서
      if(nums[i]===nums[i+1]){//마지막 전의 값과 마지막 값이 같으면
          nums.splice(i + 1, 1)
          nums.splice(i, 1)
      }//둘 다 제거한다
  }
  return nums[0]//중복된 숫자가 제거된 후 남은 첫번째 값(single number) 출력
};