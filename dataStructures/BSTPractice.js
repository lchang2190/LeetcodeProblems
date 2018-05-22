var Node = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

var BST = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

BST.prototype.insert = function(val) {
	var node = new Node(val);
	var current = this;
	while (current) {
		if (node.val > current.val) {
			if (current.right === null){
				current.right = node;
				break;
			} else {
				current = current.right;
			}
		} else if (node.val < current.val) {
			if (current.left === null) {
				current.left = node;
				break;
			} else {
				current = current.left;
			}
		}
	}
}

BST.prototype.DFS = function(node) {
	if (node) {
		console.log(node.val);
		BST.prototype.DFS(node.left);
		BST.prototype.DFS(node.right);
	}
}

BST.prototype.contains = function(value) {
	var flag = false;
	var inner = function(node) {
		if (node) {
			console.log(node.val);
			if (node.val === value) {
				flag = true;
			}
			inner(node.left);
			inner(node.right);
		}
	}

	inner(this);
	return flag;
}

BST.prototype.parent = function(value) {
	var parent = null;
	var inner = function(node) {
		if (node) {
			if (!node.left || !node.right) {

			} else {
				if (node.left.val === value || node.right.val === value ) {
					parent = node.val;
				}
			}
			inner(node.left);
			inner(node.right);
		}
	}
	inner(this);
	return parent;
}

BST.prototype.height = function() {
	
}




var newTree = new BST(10);
newTree.insert(5);
newTree.insert(40);
newTree.insert(11);

newTree.DFS(newTree);
// console.log(newTree.contains(15));
// console.log(newTree.parent(6));
// console.log(newTree);