/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {

    let len = arr.length;
    if (len == 1) {
        return arr;
    }
    let start = 0;
    let end = len - k;

    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (x - arr[mid] > arr[mid + k] - x) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return arr.slice(start, start + k);

};

// console.log(findClosestElements([10, 12, 15, 17, 18, 20, 25] , 4,16));
// console.log(findClosestElements( [1,2], 1,1));
console.log(findClosestElements([1, 1, 2, 2, 2, 2, 2, 3, 3], 3, 3));


// console.log(findClosestElements([1,1,1,10,10,10] , 1,9));