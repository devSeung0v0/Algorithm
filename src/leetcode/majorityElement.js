const majorityElement = (nums)=>{
  nums.sort()//오름차순 정렬해서
  return nums[Math.floor(nums.length / 2)]
  //배열 값 개수가 홀수일 때 감안해서 인덱스값 내려줌
  //배열 인스턴스가 7개면 3.5에서 내림 -> 3번째 인덱스값 리턴 (배열 안에  Majority Element는 배열 길이의 반 이상 있다고 했으니 배열 길이 7이면 4개 이상 있는 것이고, 인덱스값으로는 3번째부터 Majority Element)
}