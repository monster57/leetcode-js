/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    if(isStringPalindrome(str)){
        return true;
    }
    return false;
};


let isStringPalindrome = (word)=>{
    for(let i = 0; i<=Math.floor((word.length-1)/2); i++){
        if(word[i] != word[word.length -1 -i]){
            return false
        }
    }
    return true;
}