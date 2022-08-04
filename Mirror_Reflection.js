/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
  while(p%2 == 0 && q%2 == 0){
      p = p>>1;
      q = q>>1;
  }
    
    p =p%2;
    q = q%2;
    
    if(p == 1 && q == 1) return 1;
    if(p == 0 & q == 1) return 2;
    if(p == 1 && q == 0) return 0;
    
    
};