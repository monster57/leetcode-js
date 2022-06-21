/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  for(let r = 0;r<grid.length;r++){
    for(let c = 0;c<grid[0].length;c++){
      if(grid[r][c] == 1) return findIlandPerimeter(grid , r , c)
    }
  }

  return -1;
};

let findIlandPerimeter = (grid , r , c)=>{

  let rowInbounce = 0<=r && r<grid.length;
  let columnInbounce = 0<=c && c<grid[0].length;
  if(!rowInbounce || !columnInbounce) return 1;
  
  if(grid[r][c] == 0) return 1;

  if(grid[r][c] == '#') return 0;

  grid[r][c] = '#';
  
  let parameter = 0;
  parameter += findIlandPerimeter(grid , r-1 , c);
  parameter += findIlandPerimeter(grid , r+1 , c);
  parameter += findIlandPerimeter(grid , r , c-1);
  parameter += findIlandPerimeter(grid , r , c+1);

  return parameter;

}

console.log(islandPerimeter([[0,1]]));