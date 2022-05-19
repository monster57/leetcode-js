// https://leetcode.com/problems/single-number-iii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hashMaps = new Map();
  let result = [];
  for (let num in nums){
      hashMaps[nums[num]] = (hashMaps[nums[num]]+1 || 1);
  }  
  for(let key in hashMaps){
      if(hashMaps[key] == 1){
          result.push(key);
      }
  }
  return result;
};

console.log(singleNumber([2,2,3,2]));