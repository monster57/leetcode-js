// /**
//  * @param {number} x
//  * @param {number} n
//  * @return {number}
//  */
// var myPow = function(x, n) {

//     if(n < 0){
//         x= (1/x);
//     }
//     if (n == 0) {
//         return 1;
//     }
//     let result = x;
    
//     let counter = Math.abs(n);
    
//     while (counter >1) {
//         result = (result * result);
//         if (counter % 2) {
//             result = result * x;
//         }
//         counter = Math.floor(counter/2);
//     }
//     return result;
// };


const myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 === 1) return x * myPow(x, n - 1);
  return myPow(x * x, n / 2);
};


console.log(myPow(8.84372, -5));