var Node = function(val){
	this.val = val;
	this.right = null;
	this.left = null;
}

var maxDepth = function(root) {
	if (!root) {
		return 0
	}

	var stack = [];
	var max = 1;

	stack.push({
		node: root,
		depth: max
	})

	while (stack.length) {
		let obj = stack.pop();
		let depth = obj.depth;
		// console.log(depth);
		if (obj.node.left) {
			stack.push({ node: obj.node.left, depth: depth + 1})
		}

		if (obj.node.right) {
			stack.push({ node: obj.node.right, depth: depth + 1})
		}

		if (depth > max) {
			max = depth;
		}
	}
  return max;
};

var tree = new Node(3);
tree.left = new Node(9);
tree.right = new Node(20);
tree.right.left = new Node(15);
tree.right.right = new Node(7);

console.log(maxDepth(tree));