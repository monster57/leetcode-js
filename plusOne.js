https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1, value = 0;
    for(let i = digits.length- 1;i>=0;i--){
        if(digits[i] != 9){
            digits[i]++;
            return digits

        }
        else{
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;
};



console.log(plusOne([9,9,9]));