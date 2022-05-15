https: //leetcode.com/problems/find-all-duplicates-in-an-array/
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    var findDuplicates = function(nums) {
        let i = 0;
        let result = [];
        while (i < nums.length) {
            if (nums[i] != i + 1 && nums[i] != nums[nums[i] - 1]) {

                swap(nums, i, nums[i] - 1)
            } else {
                i++;
            }
        }

        for (i = 0; i < nums.length; i++) {
            if (i != nums[i] - 1) {
                result.push(nums[i])
            }
        }
        return result;
    };


let swap = (arr, ele1, ele2) => {
    let temp = arr[ele1];
    arr[ele1] = arr[ele2];
    arr[ele2] = temp;
}


console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))