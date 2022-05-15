https://leetcode.com/problems/non-decreasing-array/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let numberOfFalsePosition = 0;
    nums.reduce((prev , curr, index)=>{
        if(prev>curr){
            numberOfFalsePosition++;
            if(index-2>=0 && curr<nums[index-2]){
                return prev;
            }else{
                return curr;
            }
            
        }else{
            return curr;
        }
    });
    return numberOfFalsePosition<2;
};    

console.log(checkPossibility([1,2,3,4]))