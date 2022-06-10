/**
 * @param {string} input
 * @return {number}
 */

var lengthLongestPath = function(input) {
    let inputarr = input.split("\n");
    let path = [];
    let max = 0;
    for (let pathData of inputarr) {
        if (pathData.startsWith('\t')) {
            let nesting = pathData.match(/\t/g).length;
            while (nesting < path.length) {
                path.pop()
            }
            path.push(pathData.replace(/\t/g, ""))
        } else {
            path = [pathData];
        }



        if (isFile(path.at(-1))) {
            const filePath = path.join("/");
            max = Math.max(filePath.length, max);
        }
    }


    return max;
};

let isFile = (path) => {
    return path.includes('.');
}


console.log(lengthLongestPath("dir\n\t        file.txt\n\tfile2.txt"));