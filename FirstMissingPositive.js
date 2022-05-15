/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    while(i<nums.length){
        if((nums[i] != nums[nums[i] - 1]) &&  (nums[i]>=1) && (nums[i]<=(nums.length+1))){
            swap(nums,  i , nums[i] -1)
        }else{
            i++
        }
    }

    for(i = 0;i<nums.length;i++){
        if(nums[i] != i+1){
            return i+1;
        }
    }
    return nums.length+1;
};


let swap = (arr, ele1, ele2) => {
    let temp = arr[ele1];
    arr[ele1] = arr[ele2];
    arr[ele2] = temp;
}


console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([7,8,9,11,12]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([1]));
console.log(firstMissingPositive([1,1]));
console.log(firstMissingPositive([0,1,2]));

