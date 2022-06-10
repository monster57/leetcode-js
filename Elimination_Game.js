/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
         let result = 1; let gap = 1; let flag = false;

    while(n>1){
        if(!flag || (flag && n%2)){
            result += gap;            
        }
        flag = !flag;
        gap <<=1;
        n >>=1;

    }
    return result;

};







// /**
//  * @param {number} n
//  * @return {number}
//  */
// var lastRemaining = function(n) {
//   let passes = 0;
//   let gap = 1;
//   let result = 1;
//   let  count = n;
//   while(count>1){
//       passes++;
//       if((passes&1) || (count & 1)){
//           result += gap;
//       }

//       gap <<=1;
//       count >>=1;
//   }
//   return result;

// };


console.log(lastRemaining(9));
