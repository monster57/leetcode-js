/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let travarse = (cloned)=>{
        if(!cloned) return null;
        if(cloned.val == target.val) return cloned;
        return  travarse(cloned.left) || travarse(cloned.right);
    }
    
    return travarse(cloned);
};