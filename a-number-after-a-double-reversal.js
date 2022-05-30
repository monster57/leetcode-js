/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    return !num?true:!!(num%10);
};





console.log(isSameAfterReversals(1800));




// /**
//  * @param {number} num
//  * @return {boolean}
//  */
// var isSameAfterReversals = function(num) {
//     if(num == 0) return true;
//     let strNum =  num.toString();
//     return strNum[strNum.length-1] !== '0'
// };





// console.log(isSameAfterReversals(1800));