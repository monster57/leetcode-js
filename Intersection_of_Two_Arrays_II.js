https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const hmaps = {};
    nums1.forEach(num=>{
        if(hmaps[num] == undefined){
           hmaps[num] = 1;
        }else{
            hmaps[num]++; 
        }
    })

    return nums2.filter(num=>{
        if(hmaps[num]>0){
            hmaps[num]--;
            return true;
        }
        return false;
    })
};
// console.log(intersect( [4,9,5] , [9,4,9,8,4]));
console.log(intersect( [1,2,1] , [2,2]));
