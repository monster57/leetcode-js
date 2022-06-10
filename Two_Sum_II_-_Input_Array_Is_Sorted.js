/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start = 0;
    let end  = nums.length-1;
    while(start<= end){
        let total = nums[start]+nums[end];
        if(total == target){
            return [start+1 , end+1]
        }else if(total > target){
            end--;
        }else{
            start++;
        }
    }
};