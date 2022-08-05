/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let memo = [];
    let result = 0;
    return possibleCombination(nums , target, memo);
    
};


let possibleCombination = (nums, target , memo)=>{
        if(target < 0) return 0;
        if(target == 0) return 1;

        let totalCombination = 0;
        if(target in memo) return memo[target];
        for( let num of nums){
            if(target >= num){
              totalCombination += possibleCombination(nums , target - num , memo);
            }
        }

        memo[target] = totalCombination;
        return totalCombination;
}



console.log(combinationSum4([2,1,3] , 35));