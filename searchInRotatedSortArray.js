/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let peak = findPeakIndex(nums);
    let result = binarySearch(nums, target, start , peak);
    if(result <0){
        return binarySearch(nums, target,  peak+1 , end);
    }
    return result;

}


var binarySearch = (arr , target , start, end)=>{
    while(start<=end){
        let mid = Math.floor(start+(end-start)/2);
        if(arr[mid] == target){
            return mid;
        }else if(arr[mid]>target){
            end = mid -1;
        }else{
            start = mid+1;
        }
    }
    return -1;
}



var findPeakIndex = (arr)=>{
    let start = 0;
    let end = arr.length-1;
    while(start<end){
        let mid = Math.floor(start+(end-start)/2);
        console.log(mid,  start , end);
        if(arr[mid]>arr[mid+1]){
            return mid;
        }else if(arr[mid]<arr[start]){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    console.log(start , end);
    if(start>end){
        return start;
    }
    return end;
}



console.log(search([4,5,6,7,0,1,2] , 0))
console.log(search([8,9,2,3,4] , 9))
// console.log(findPeakIndex([8,9,2,3,4]))


console.log(search([1,3], 0))

