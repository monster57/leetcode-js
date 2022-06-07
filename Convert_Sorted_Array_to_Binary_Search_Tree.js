/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    const travarse = (left, right) => {
        if(left>right) return null;
        const middle = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[middle]);
        root.left = travarse(left, middle - 1);
        root.right = travarse(middle + 1, right);

        return root;
    }


    return travarse(0 , nums.length-1);
};