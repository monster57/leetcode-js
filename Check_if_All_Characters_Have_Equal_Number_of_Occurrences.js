/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let hasMap = {};
    for(let i = 0; i<s.length;i++){
        if(!hasMap[s[i]]){
            hasMap[s[i]] = 1;
        }else{
            hasMap[s[i]] += 1;
        }
    }
    
    return hasSameValue(hasMap);
};



let hasSameValue = (obj)=>{
    return new Set(Object.values(obj)).size == 1;
}