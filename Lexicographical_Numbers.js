/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
   let result = [];
   let getValue = (val)=>{
       if(val>n) return;
       result.push(val);
       getValue(val*10);
       if(val%10 != 9){
           getValue(val+1);
       }
   }
   getValue(1);
   return result;
};

console.log(lexicalOrder(123));



// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// var lexicalOrder = function(n) {
//   return [...Array(n+1).keys()].slice(1).sort()
// };
