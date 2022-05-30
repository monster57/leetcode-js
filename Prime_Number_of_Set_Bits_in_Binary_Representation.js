/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let primeCount = 0;
    for(let i = left;i<=right;i++){
        if(isPrime(totalBitsOfNumber(i))){
            primeCount++;
        }
    }
    return primeCount;
};



let totalBitsOfNumber = (num)=>{
    let count = 0;
    while(num){
        if(num & 1){
            count++;
        }
        num = num>>1;
    }
    return count;
}


let isPrime = (num)=>{
    if(num == 1 || num ==  0) return false;

    for(let i = 2; i<=Math.floor(Math.sqrt(num));i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}


console.log(countPrimeSetBits(6 , 10));