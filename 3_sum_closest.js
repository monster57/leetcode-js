/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b);
    let closestSum = nums[0]+nums[1]+nums[2];
    for(let i = 0; i<nums.length -2;i++){
        let start = i+1;
        let end = nums.length - 1;
        while(start<end){
            let sum = nums[i]+nums[start]+nums[end];
            if(Math.abs(sum-target)<Math.abs(closestSum - target)){
                closestSum = sum;
            }
            if(sum<target){
                start++;
            }else{
                end--;
            }
        }
    }
    return closestSum;
};

console.log(threeSumClosest([-1,2,1,-4] ,1));
