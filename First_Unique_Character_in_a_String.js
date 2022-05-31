https://leetcode.com/problems/first-unique-character-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hasMap = {};
    for(let i =0;i<s.length;i++){
        if(hasMap[s[i]]){
            hasMap[s[i]] = hasMap[s[i]]+1;
        }else{
            hasMap[s[i]] = 1
        }
    }    
    
    for(let i =0;i<s.length;i++){
        if(hasMap[s[i]] == 1){
            return i;
        }
    }
    return -1;
};