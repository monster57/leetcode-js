/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let indexArr = [-1];
    let result = 0;

    for(let i = 0; i<s.length; i++){
        if(s[i] == '('){
            indexArr.push(i);
            continue;
        }

        indexArr.pop();

        if(!indexArr.length){
            indexArr.push(i)
        }else{
            result = Math.max(result, i - indexArr[indexArr.length - 1]);
        }
    }
    return result;

};


console.log(longestValidParentheses("()()()(()"));
