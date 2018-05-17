function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var isValidBST = function (node, max=Infinity, min=-Infinity) {
	if (!node) {
		return true;
	}
	console.log(node.val, min);
	if (node.val <= min || node.val >= max) {
		return false;
	}
	return (isValidBST(node.left, Math.min(max, node.val), min) && isValidBST(node.right, max, Math.max(min, node.val))); 
}


var tree = new TreeNode(10);
tree.left = new TreeNode(5);
tree.right = new TreeNode(15);
tree.right.left = new TreeNode(12);
tree.right.right = new TreeNode(20);

var tree2 = new TreeNode(10);
tree2.left = new TreeNode(5);
tree2.right = new TreeNode(15);
tree2.right.left = new TreeNode(12);
tree2.right.right = new TreeNode(20);
tree2.left.left = new TreeNode(11);


// function validate(root, max, min) {
//   if (root === null) {
//     return true;
//   }
//   console.log(root.val, max, min);
//   // 15, -Infinity
//   if (root.val > max || root.val < min) {
//     return false;
//   }
//   newMax = Math.min(root.val, max);
//   newMin = Math.max(root.val, min);
//   return validate(root.left, newMax, min) && validate(root.right, max, newMin); 
// }
// console.log(tree);
console.log(isValidBST(tree2))
console.log(isValidBST(tree2, max, min))