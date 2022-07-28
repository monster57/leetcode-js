/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) return findIslandPerimeterBFS(grid, r, c)
        }
    }

    return -1;
};

let findIslandPerimeterBFS = (grid, r, c) => {
    let rowLength = grid.length;
    let colLength = grid[0].length;
    let visited = new Set();
    let queue = [];
    visited.add(r + ',' + c);
    queue.push([r, c]);
    const adjCells = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    let parameter = 0;

    while (queue.length) {
        const [i, j] = queue.shift();
        for (let cell of adjCells) {
            const [ai, aj] = cell;
            const row = ai + i,
                col = j + aj;
            if (!visited.has(row + ',' + col)) {
                if (isPositionValid(grid , row, col) && grid[row][col]) {
                    queue.push([row, col]);
                    visited.add(row + ',' + col);
                } else {
                    parameter++;
                }
            }
        }
    }
    return parameter;
}


let isPositionValid = (grid , r, c) => {
    let rowInbounce = 0 <= r && r < grid.length;
    let columnInbounce = 0 <= c && c < grid[0].length;
    return rowInbounce && columnInbounce;
}

let findIslandPerimeterDFS = (grid, r, c) => {

    let rowInbounce = 0 <= r && r < grid.length;
    let columnInbounce = 0 <= c && c < grid[0].length;
    if (!rowInbounce || !columnInbounce) return 1;

    if (grid[r][c] == 0) return 1;

    if (grid[r][c] == '#') return 0;

    grid[r][c] = '#';

    let parameter = 0;
    parameter += findIlandPerimeter(grid, r - 1, c);
    parameter += findIlandPerimeter(grid, r + 1, c);
    parameter += findIlandPerimeter(grid, r, c - 1);
    parameter += findIlandPerimeter(grid, r, c + 1);

    return parameter;

}

console.log(islandPerimeter(
    [[1,0]]
));