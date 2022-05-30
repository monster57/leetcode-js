/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    if(num1 == 0 || num2 == 0) return 0;

    return countOperations(Math.abs(num1- num2) , Math.min(num1,num2))+1;
};

console.log(countOperations(2,3))





// /**
//  * @param {number} num1
//  * @param {number} num2
//  * @return {number}
//  */
// var countOperations = function(num1, num2) {
//     let count = 0;
//     while(num1 != 0 && num2 != 0){
//         count++;
//         if(num1>=num2){
//             num1 = num1 - num2;
//         }else{
//             num2 = num2 - num1;
//         }
//     }

//     return count
// };

// console.log(countOperations(2,3))