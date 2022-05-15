/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    let targetIndex = 0;
    for(let i = 1; i<= n ; i++){
        result.push("Push");
        if(target[targetIndex] != i){
            result.push("Pop")
        }else{
            targetIndex++;
        }

        if(!target[targetIndex]){
            break;
        }
    }
    return result;
};


console.log(buildArray([1,2,3] , 3));
console.log(buildArray([1,2] , 4));

