/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if(num == 0) return 0;
    let count = 0;

    while(num){
        count = count +(((num&1) == 0)?1:2);
        num = num>>1;
    }
    return count - 1;
};

console.log(numberOfSteps(14));




// /**
//  * @param {number} num
//  * @return {number}
//  */
// var numberOfSteps = function(num) {
//     let count =  0;
//     while(num){
//         count++;
//         if(num%2 == 0){
//             num = num/2;
//         }else{
//             num = num -1;
//         }
//     }

//     return count;
// };