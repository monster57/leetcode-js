/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  let hours = Array(4).fill().map(()=>{
      return []
  });
  let minutes = Array(6).fill().map(()=>{
      return []
  });;
  for(let i = 0;i<12;i++){

      hours[getIndex(i)].push(i);
  }

  for(let i = 0; i<60;i++){
      minutes[getIndex(i)].push(String(i).padStart(2,0));
  }
    let result = [];

  for(let i=0; i<=turnedOn;i++){
      let h = hours[i];
      let m = minutes[turnedOn -i];

      for(let j = 0;h && j<h.length;j++){
          for(let k = 0; m && k < m.length;k++){
              result.push(h[j]+":"+m[k]);
          }
      }
  }
  return result;
};


let getIndex = (num)=>{
    if(!num) return 0;

    return (1 & num)+getIndex(num>>1);
}

console.log(readBinaryWatch(9));