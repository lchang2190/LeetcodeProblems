function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var isSymmetric = function(root) {
	if (!root) return true;

	let helper = function(left, right) {
		if (!left && !right) return true;
		if (!left || !right) return false;

		if (left.val !== right.val) return false;

		return (helper(left.left, right.right) && helper(left.right, right.left))
	}

	return helper(root.left, root.right);
	    
};

var tree = new TreeNode(10);
tree.left = new TreeNode(5);
tree.right = new TreeNode(5);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(12);
tree.right.left = new TreeNode(12);
tree.right.right = new TreeNode(3);

console.log(isSymmetric(tree))