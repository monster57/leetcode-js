/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length;
    k=k%len;
    if (len > k) {
        reverse(nums, 0, len - k)
        reverse(nums, len - k, len)
        reverse(nums, 0, len)
    }

    return nums;
};

let reverse = function(arr, position1, position2) {
    let temp;
    for (let i = 0; i < Math.floor((position2 - position1) / 2); i++) {
        temp = arr[position1 + i];
        arr[position1 + i] = arr[position2 - i - 1];
        arr[position2 - i - 1] = temp;
    }
}



console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));