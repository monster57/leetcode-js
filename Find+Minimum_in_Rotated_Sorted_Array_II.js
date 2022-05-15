https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start<end){

        let mid = Math.floor(start+(end-start)/2);
        // console.log(start , end , mid);
        if(nums[mid] > nums[mid+1]){
            return nums[mid+1];
        }
        else if(nums[mid] == nums[start] && nums[mid] == nums[end]){
            end--;
        }
        else if(nums[mid]>=nums[start] && nums[start]>=nums[end]){
            start = mid+1;
        }    
        else{
            end = mid;
        }
    }
    if(nums[start]>nums[end]){
        return nums[end]
    }
    return nums[start];
};


//[3,4,5,1,2]