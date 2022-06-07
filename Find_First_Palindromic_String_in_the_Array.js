/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0;i<words.length;i++){
        if(isPalindrome(words[i])){
            return words[i]
        }
    }
    return "";
};


let isPalindrome = (word)=>{
    for(let i = 0; i<=Math.floor(word.length/2); i++){
        if(word[i] != word[word.length -1 -i]){
            return false
        }
    }
    return true;
}