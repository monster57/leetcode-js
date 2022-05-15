https://leetcode.com/problems/find-the-duplicate-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0;
    while(i<nums.length){
        let correctIndex = nums[i] -1;

        if(nums[i] != i+1){
            if(nums[i] != nums[correctIndex]){
                swap(nums , i, correctIndex);
            }else{
                return nums[i]
            }    
        }else{
            i++;
        }
        

    }

    return -1;
};

let swap = (arr, ele1, ele2)=>{
    let temp = arr[ele1];
    arr[ele1] = arr[ele2];
    arr[ele2] = temp;
}



console.log(findDuplicate([1,3,4,2,2]));