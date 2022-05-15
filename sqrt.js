/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 1 || x == 0){
        return x;
    }

    let start = 1;
    let end = Math.floor(x/2);

    while(start<=end){
        let mid = start+Math.floor((end-start)/2);
        if(mid*mid == x){
            return mid
        } else if(mid*mid>x){
            end = mid - 1
        }else{
            start = mid+1
        };
    }
    return end;
}

console.log(mySqrt(2));