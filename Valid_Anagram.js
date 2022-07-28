/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let str1 = s.split("").sort().join("");
    let str2 = t.split("").sort().join("");
    
    if(str1 == str2) return true;
    
    return false
};