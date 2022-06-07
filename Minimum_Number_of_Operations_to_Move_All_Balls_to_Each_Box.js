/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
   let ones = 0;
   let total =0;
   let result = [];

   for(let i = 0;i<boxes.length;i++){
       result[i] = total;
       if(boxes[i] == '1') ones++;
       total += ones;
   }
   total = 0; ones = 0;
   for(let i = boxes.length-1;i>=0;i--){
       result[i] += total; 
       if(boxes[i] == '1') ones++;
       total += ones;
   }

   return result;
};

console.log(minOperations("110"));



// /**
//  * @param {string} boxes
//  * @return {number[]}
//  */
// var minOperations = function(boxes) {
//     let ballIndex = [];
//     let result = [];
//     for(let i= 0;i<boxes.length;i++){
//         if(boxes[i] == 1){ 
//             ballIndex.push(i)
//         }
//     }    
//     for(let i= 0;i<boxes.length;i++){
//         let position = ballIndex.reduce((pv,cv)=>{
//             if(i == cv) return pv;
//             return pv+Math.abs(cv-i);
//         },0);
//         result.push(position);
//     }
//     return result;
// };


// console.log(minOperations("001011"));