https://leetcode.com/problems/integer-to-roman/submissions/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romanValueTable = getRomanValueTable();
    let numStr = num.toString();
    let result=  '';
    for(let i = 0;i<numStr.length;i++){
        result = romanValueTable[i][numStr[numStr.length-1-i]]+result;
    }
    return result;
};



var getRomanValueTable = ()=>{
    return [['' , 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX' , 'LXXX', 'XC'],
    ['', 'C','CC','CCC','CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM', '', '','','','','']
    ];

}

console.log(intToRoman(1234));
