/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    let hasmap = {};
    let startIndex = 0
    let result = 0;
    for(let i = 0;i<s.length;i++){
        
        if(hasmap[s[i]] != undefined  && startIndex<= hasmap[s[i]]){
                startIndex = hasmap[s[i]]+1;
            
        }
        result = Math.max(result , i - startIndex)
        hasmap[s[i]] = i;
    }
    return result+1;
  
};
console.log(lengthOfLongestSubstring("aabaab!bb"));