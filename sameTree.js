function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var isSameTree = function(p, q) {
	if (!p && !q) {
		return true;
	}
	if (!p || !q) {
		return false;
	}
	if (p && q) {
		console.log(p.val, q.val);
		if (p.val !== q.val) {
			return false;
		}
		return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
	}
	return true;
};

var tree1 = new TreeNode(10);
tree1.left = new TreeNode(5);
tree1.right = new TreeNode(15);
tree1.right.left = new TreeNode(12);
tree1.right.right = new TreeNode(20);

var tree2 = new TreeNode(10);
tree2.left = new TreeNode(5);
tree2.right = new TreeNode(15);
tree2.right.left = new TreeNode(12);
tree2.right.right = new TreeNode(20);

// var tree1 = new TreeNode(1);
//tree1.left = new TreeNode(2);
// tree1.right = new TreeNode(15);
// tree1.right.left = new TreeNode(12);
// tree1.right.right = new TreeNode(20);

// var tree2 = new TreeNode(1);
// tree2.left = new TreeNode(5);
// tree2.right = new TreeNode(2);
// tree2.right.left = new TreeNode(12);
// tree2.right.right = new TreeNode(20);
// console.log(tree1)
console.log(isSameTree(tree1, tree2))