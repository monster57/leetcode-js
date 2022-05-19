/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = 0;
    nums.map(num=>{
        if(num != nums[len]){
            len++;
            nums[len] = num;
        }
    })
    return len+1;
};
console.log(removeDuplicates([1,1,2]));