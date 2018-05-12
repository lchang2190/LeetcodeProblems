function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree() {
	this.root = null;
}

BinarySearchTree.prototype.push = function(val) {
	var rootNode = this.root;

	if (!rootNode) {
		this.root = new Node(val);
		return;
	}

	var currentNode = rootNode;
	var newNode = new Node(val);

	while (currentNode) {
		if (val < currentNode.value) {
			if (!currentNode.left) {
				currentNode.left = newNode;
				break;
			} else {
				currentNode = currentNode.left;
			}
		} else {
			if (!currentNode.right) {
				currentNode.right = newNode;
				break;
			} else {
				currentNode = currentNode.right;
			}
		}
	}
}

function dfs(node) {
	if (node) {
    console.log(node.value);
    dfs(node.left);
    dfs(node.right);
  }
}

function dfsInOrder(node) {
	if(node) {
		dfsInOrder(node.left);
		console.log(node.value);
		dfsInOrder(node.right);
	}
}

var bst = new BinarySearchTree();
bst.push(40);
bst.push(25);
bst.push(78);
bst.push(10);
bst.push(32);

// console.log(bst);
console.log(dfs(bst.root));
// console.log(dfsInOrder(bst.root));