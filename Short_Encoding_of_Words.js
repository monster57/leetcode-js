


/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  let hasSet = new Set(words);

  for(let word of words){
    for(let i = 1; i<word.length;i++){
      let sub = word.substring(i);
      if(hasSet.has(sub)) hasSet.delete(sub);
    }
  }

  return [...hasSet].reduce((pv,cv)=>{
    return pv+cv.length+1;
  }, 0);
  
};



console.log(minimumLengthEncoding( ["time", "me", "bell"]));