/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    changeColorOfGrid(image, sr, sc, color, image[sr][sc]);
    return image;
};


let changeColorOfGrid = (grid , r , c , color , cVal)=>{
  let rowInbounce = 0<=r && r <grid.length;
  let columnInbounce = 0<=c && c<grid[0].length;
  if(!rowInbounce || !columnInbounce) return;
  if(grid[r][c] == color) return;
  if(grid[r][c] != cVal) return;
  
  grid[r][c] = color; 
  
  changeColorOfGrid(grid , r-1 , c, color , cVal); 
  changeColorOfGrid(grid , r+1 , c, color , cVal);
  changeColorOfGrid(grid , r , c-1, color , cVal);
  changeColorOfGrid(grid , r , c+1, color , cVal);
}


console.log(floodFill([[0,0,0],[0,0,0]],  0, 0, 0));