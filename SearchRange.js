/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var searchRange = function(nums, target){
    let startIndex = binarySearch(nums , target, true);
    let endIndex = binarySearch(nums, target, false);
    return [startIndex , endIndex];
}

var binarySearch = function(arr , target , isFirstIndex){
    let start = 0;let result = -1;
    let end = arr.length -1;

    while(start<=end){
        let mid = Math.floor(start+(end-start)/2);
        if(arr[mid] == target){
            result = mid;
            if(isFirstIndex){
                end = mid -1;
            }else{
                start = mid+1;
            }
        }else if(arr[mid] >target){
            end = mid - 1;
        }else{
            start = mid+1;
        }
    }
    return result;
}

console.log(searchRange([5,7,7,8,8,10] , 6));