function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var rightSideView = function(root) {
	if (!root){
		return [];
	}
	var results = [root.val];
	var current = root.right;

	var inner = function(node) {
		if (node) {
			results.push(node.val);
			inner(node.left);
			inner(node.right);
		}
	}
	inner(current);
	return results;
};

var newTree = new TreeNode(1);
newTree.left = new TreeNode(2);
newTree.right = new TreeNode(3);
newTree.left.right = new TreeNode(5);
newTree.right.right = new TreeNode(4);

console.log(rightSideView(newTree));

