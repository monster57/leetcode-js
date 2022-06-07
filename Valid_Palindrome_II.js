/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    let j = s.length - 1;
    let i = 0;
    while(i<j){
        if(s[i] != s[j]){
            return isPalindrome(s, i , j-1) || isPalindrome(s, i+1, j);
        }
        i++;
        j--;
    }
    return true;
};



let isPalindrome = (word , left , right)=>{
    while(left<right){
        if(word[left] !=word[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}