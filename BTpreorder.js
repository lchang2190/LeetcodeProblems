var Node = function(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var preorderTraversal = function(node) {
	var results = [];

	if(!node){
		return results;
	}
	var inner = function(node){
		if (node) {
			results.push(node.val)	
			inner(node.left);
			inner(node.right);
		}
	}
	inner(node);
	return results;
};

var tree = new Node(1);
tree.right = new Node(2);
tree.right.left = new Node(3);
// console.log(tree);
console.log(preorderTraversal(tree))