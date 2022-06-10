/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {

    rectangles.sort(([x , y] ,[x1,y1])=>{
        return y - y1 || x - x1 ;
    });
    let bottomMostX = Infinity;
    let bottomMostY = Infinity;
    let topMostX = 0;
    let topMostY = 0;

  for(let [x1,y1,x2,y2] of rectangles){
      bottomMostX = Math.min(x1 , bottomMostX);
      bottomMostY = Math.min(y1 , bottomMostY);
      topMostX = Math.max(x2,topMostX);
      topMostY = Math.max(y2,topMostY);
  }  


  let largeRect = Array(topMostX - bottomMostX).fill(0);
  for(let [x1,y1,x2,y2] of rectangles){
      let bottomHeight = y1 - bottomMostY;
      let ceilHeight = y2 - bottomMostY;      
      for(let temp = x1; temp<x2;temp++){
          if(largeRect[temp - bottomMostX] != bottomHeight){
              return false;
          }
          largeRect[temp - bottomMostX] = ceilHeight;
      }
  }
  const rectHeight = topMostY - bottomMostY;
  for(let height of largeRect){
      if(height != rectHeight){
          return false;
      }
  }

  return true;

};