/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index = 0;
    for(let ch of t){
        if(s[index] == ch) index++;
    }
    return index == s.length;
};


console.log(isSubsequence("abc", "ahbgdc"));