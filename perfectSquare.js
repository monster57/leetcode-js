https://leetcode.com/problems/valid-perfect-square/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num == 0 ||num == 1){
        return num;
    }
  let start = 1;
  let end =  Math.floor(num/2);
  while(start<=end){
      let mid = Math.floor((start+end)/2);
      if(mid*mid == num){
          return true;
      }else if(mid*mid >num){
          end = mid-1;
      }else{
          start = mid+1;
      }
  }

  return false;

};


console.log(isPerfectSquare(121));