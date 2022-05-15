/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0;
    let result =[];
    while(i <nums.length){
        if(nums[i] != nums[nums[i]-1]){
            swap(nums , i , (nums[i]-1));
        }else{
            i++;
        }
    }

    for( i = 0; i<nums.length; i++){
           if((nums[i] -1) != i){
               result.push(i+1);
           }
    }



    return result;
};

let swap = (arr, ele1, ele2)=>{
    let temp = arr[ele1];
    arr[ele1] = arr[ele2];
    arr[ele2] = temp;
}


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));
