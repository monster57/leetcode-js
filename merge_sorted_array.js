/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let result = [];
    nums1.splice(m , nums1.length);
    nums2.splice(n, nums2.length);
    let i = 0, j =0;
    while(i<nums1.length && j< nums2.length){
        if(nums1[i] >nums2[j]){
            nums1.splice(i , 0, nums2[j]);
            j++;
            i++;
        }else{
            i++;
        }
    }

    if(j<nums2.length){
        nums1.push(...nums2.slice(j));
    }
    
    
    return nums1;
};
console.log(merge([1,2,3,0,0,0] , 3, [2,5,6],  3));