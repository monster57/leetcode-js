/**
 * @param {number[]} nums
 * @return {number}
 */

 
var maximumUniqueSubarray = function(nums) {
    const hasMap = new Map();
    let startIndex = 0;
    let endIndex = 0;
    let result = 0;
    let sum = 0;

    while (startIndex < nums.length && endIndex < nums.length) {
        if (hasMap.has(nums[endIndex])) {
            sum = sum - nums[startIndex];
            hasMap.delete(nums[startIndex++])
        } else {
            sum=sum+nums[endIndex];
            result = Math.max(sum, result);
            hasMap.set(nums[endIndex++]);
        }
    }


    return result;
};


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumUniqueSubarray = function(nums) {
//     const hasSet = {};
//     let startIndex = 0;
//     let endIndex = 0;
//     let result = 0;

//     for(let i = 0;i<nums.length;i++){
//         if(nums[i] in hasSet){
//             startIndex = Math.max(hasSet[nums[i]]+1 ,startIndex);   
//         }
//         hasSet[nums[i]] = i;
//         endIndex = i;
//         let sumArr = nums.slice(startIndex , (endIndex  +1));
//         if(sumArr.length){
//             result = Math.max(result , sumArr.reduce((pv,cv)=>pv+cv));
//         }
//     }


//     return result;
// };


console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));