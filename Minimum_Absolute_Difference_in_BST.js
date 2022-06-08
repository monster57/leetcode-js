/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
   let prev = Infinity;
    let min = Infinity;
    
    const traverse = root => {
        if (root.left) traverse(root.left);
        min = Math.min(min, Math.abs(root.val - prev));
        prev = root.val;

        if (root.right) traverse(root.right);
    };

    traverse(root);
    return min;
};