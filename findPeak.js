https://leetcode.com/problems/find-peak-element/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0;
    let end  = nums.length-1;
    while(start<end){

        let mid = Math.floor(start+(end-start)/2);
        if(nums[mid] >= nums[mid+1]){
            end  = mid;
        }else{
            start = mid+1;
        }
    }

    if(nums[start]>nums[end]){
        return start;
    }
    return end;
}


console.log(findPeakElement([6,5,4,3,2,3,2]))


// [6,5,4,3,2,3,2]