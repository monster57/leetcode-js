/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
    for(let i= 1; i<n;i++){
        if(!containsZero(n-i) && !containsZero(i)){
            return [n-i , i];
        }
    }
    return [-1,-1]

};

let containsZero = (num)=>{
    while(num){
        if(num%10 == 0) return true;
        num = Math.floor(num/10)
    }
    return false;

}


console.log(getNoZeroIntegers(10100));