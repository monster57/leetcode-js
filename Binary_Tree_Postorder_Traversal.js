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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];
    
    let travarse = (root)=>{
        if(root == null)  return;
        if(root.left != null)  travarse(root.left);
        if(root.right != null)  travarse(root.right);
        if(root.val != null) result.push(root.val);
    }
    travarse(root);
    return result;
};