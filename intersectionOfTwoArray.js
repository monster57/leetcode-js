/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersectionArr = [];
    nums1.forEach((num)=>{
        if(nums2.indexOf(num)>=0){
            intersectionArr.push(num);
        }
    })


    return intersectionArr.filter((ele,i,arr)=>{
        return arr.indexOf(ele) == i;
    })
};
console.log(intersection( [4,9,5] , [9,4,9,8,4]));
console.log(intersection( [1,2,2,1] , [2,2]));