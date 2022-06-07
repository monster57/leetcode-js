/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
   let len = 1<<k;
   let hasMap = {};
   for(let i = 0;i<s.length-k+1;i++){
       let substr = s.substr(i , k);
       if(!hasMap[substr]) hasMap[substr] = i;
   }

   if(Object.keys(hasMap).length == len) return true;
   return false;
};








// console.log(hasAllCodes("1011110111001001101001110001100111101111010101011100111001110010010001000111010110101110000110101001011100100010100110011101011110001000100010101101011",20));
console.log(hasAllCodes("00110110", 2));