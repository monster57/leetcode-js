/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let arr = Array(m + 1).fill('').map(() => Array(n + 1).fill(0));

    strs.forEach(str => {
        let zero = 0;
        let one = 0;
        for (let s of str) {
            if (s == '0') {
                zero++;
            } else {
                one++;
            }
        }


        for (let i = m; i >= zero; i--) {
            for (let j = n; j >= one; j--) {
                arr[i][j] = Math.max(arr[i][j], arr[i - zero][j - one] + 1)
            }
        }

    })
    return arr[m][n];
};


console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));