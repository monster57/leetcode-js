/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result= "";
    for(let i = 0; i<=s.length; i++){
        let sOdd = palindromeString(s , i , i);
        let sEven = palindromeString(s , i , i+1);
        result = result.length >= sOdd.length?result:sOdd;
        result = result.length >= sEven.length?result:sEven;
    }
    
    return result;
};



let palindromeString = (word , left, right)=>{
    while(left >=0 && right<word.length && word[left] == word[right]){
        left--;
        right++;

    }
    return word.substring(left+1, right);
}

console.log(longestPalindrome("eabcb"));