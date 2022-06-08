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
var minDiffInBST = function(root) {
    let prev = Infinity;
    let minDist = Infinity;

    let travarse=(node)=>{
        if(node.left) travarse(node.left);
        minDist = Math.min(minDist , Math.abs(node.val - prev));
        prev = node.val;
        if(node.right) travarse(node.right);
    }

    travarse(root);
    return minDist;
};