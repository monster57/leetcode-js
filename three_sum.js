/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }

    let arr = nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        findTriplet(arr, i, i + 1, nums.length - 1, result);
    }
    return result;
};


var findTriplet = function(nums, index, startIndex, endIndex, result) {
    let i = startIndex,
        j = endIndex;
    while (i < j) {
        let sum = nums[i] + nums[j] + nums[index];
        if (sum == 0) {
            result.push([nums[index], nums[i], nums[j]]);
            i++;
            while(nums[i] == nums[i-1] && i<j){
                i++;
            }
        } else if (sum > 0) {
            j--;
        } else {
            i++;
        }
    }
}
