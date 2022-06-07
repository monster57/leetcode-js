/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  for(let i = 0; i<nums.length;i++){
      nums[i] = nums[i]+(nums[i-1]||0);
  }  

  return nums;
};

console.log(runningSum([1,2,3,4]));