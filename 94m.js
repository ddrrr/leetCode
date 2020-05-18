/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let openList = [root];
    let result = [];
    let itr = root;
    while (itr) {
        if (itr.state == null) {
            itr.state = 1;
            if (itr.left) {
                itr = itr.left;
            }
            
        }
        else if (itr.state == 1) {
            itr.state = 2;
            result.push(itr.val);
            if (itr.right) {
                itr.right.back = itr;
                itr = itr.right;
            }
            
        }
        else if (itr.state == 2) {
            itr.state == 3;
            itr = itr.back;
        }
    }

    return result;
};