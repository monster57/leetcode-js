/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((pv,cv)=>{
        return pv^cv;
    })
};

console.log(singleNumber([2,2,3,2]));