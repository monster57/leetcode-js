/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  let target = nums.length - k;
  for(let i=0;i<target;i++){
      let lowestValue = nums[0];
      for(let j = 0; j< nums.length;j++){          
          lowestValue = Math.min(lowestValue , nums[j]);
      }
      let index = nums.indexOf(lowestValue);
      nums.splice(index , 1);
  }
  return nums;
};
