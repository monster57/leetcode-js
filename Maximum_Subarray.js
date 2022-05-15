https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxValue = nums[0]; currentSum = 0;
    
    for(let i = 0;i<nums.length;i++){
        if(currentSum < 0){
             currentSum = 0;
        }
        
        currentSum = currentSum+nums[i];
        
        
        maxValue = Math.max(maxValue , currentSum);
    }
    return maxValue
};