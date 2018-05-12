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


var tree = new TreeNode(1);
tree.left = new TreeNode(1);
// tree.right = new TreeNode(15);
// tree.right.left = new TreeNode(13);
// tree.right.right = new TreeNode(20);

// console.log(tree);
console.log(isValidBST(tree))