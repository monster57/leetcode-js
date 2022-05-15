https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i  = 0;
    while(i<nums.length){
        // console.log(i , nums[i] , nums);
        if(i != nums[i] && nums[i]<nums.length){
            swap(nums, i, nums[i])
        }else{
            i++;
        }
    }



    for( i = 0;i<nums.length;i++){
        if(nums[i] != i){
            return i;
        }
    }

    return nums.length;
};


let swap = (arr, ele1, ele2)=>{
    let temp = arr[ele1];
    arr[ele1] = arr[ele2];
    arr[ele2] = temp;
}

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))