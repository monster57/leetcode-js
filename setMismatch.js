https://leetcode.com/problems/set-mismatch/submissions/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let i = 0;
    while (i < nums.length) {
        let correctIndex = nums[i] - 1
        if (nums[i] != i + 1 && nums[i] != nums[correctIndex]) {
            swap(nums, i, correctIndex);
        } else {
            i++;
        }


    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return [nums[i], i + 1];
        }
    }
    return [];
};


let swap = (arr, ele1, ele2) => {
    let temp = arr[ele1];
    arr[ele1] = arr[ele2];
    arr[ele2] = temp;
}

console.log(findErrorNums([8, 7, 3, 5, 3, 6, 1, 4]))
console.log(findErrorNums([1,2,2,4]))
