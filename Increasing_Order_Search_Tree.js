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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    
    let node = new TreeNode(-1);
    const tree =  node;
    
    let DFS = (root)=>{
        if(!root) return;
        if(root.left) DFS(root.left);
        
        let newNode = new TreeNode(root.val);
        node.right = newNode;
        node.left = null;
        node = node.right;
        
        if(root.right) DFS(root.right);
        
    }
    DFS(root);
    
    return tree.right;
};