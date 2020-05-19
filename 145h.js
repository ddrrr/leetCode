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
var postorderTraversal = function (root) {
    let result = [];
    let itr = root;
    while (itr) {
        if(itr.state == null){
            itr.state = 0;
        }
        itr.state++;

        if (itr.state == 1) {
            if (itr.left) {
                itr.left.back = itr;
                itr = itr.left;
            }
        }
        else if (itr.state == 2) {
            if (itr.right) {
                itr.right.back = itr;
                itr = itr.right;
            }
        }
        else if(itr.state == 3){
            result.push(itr.val); 
            itr = itr.back;
        }
    }

    return result;
};