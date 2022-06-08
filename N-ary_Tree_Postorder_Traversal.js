/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let result = [];
    
    let travarse = (root)=>{
        if(root == null)  return;
        for(let i = 0; i<root.children.length;i++){
            travarse(root.children[i]);
        } 
        if(root.val != null) result.push(root.val);
    }
    travarse(root);
    return result;
};