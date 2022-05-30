https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  while(n){
      if(n%3 == 2) return false;
      n = n/3>>0;
  }
  return true;
};


console.log(checkPowersOfThree(91))