https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let closeToOpen = {
        "]":"[",
        "}":"{",
        ")":"("
    }

    for(let p in s){
        if(closeToOpen[s[p]]){
            if(stack.length > 0 && closeToOpen[s[p]] == stack[stack.length-1]){
                stack.pop();
            }else{
                return false;
            }
        }else{
            stack.push(s[p]);
        }
    }
    return stack.length == 0;
    
};