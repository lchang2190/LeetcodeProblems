var levelOrder = function(root) {
    var results = [];
    var hash = {};

    if (!root) {
        return results;
    }
    
    var queue = [];
    queue.push({
    	node: root,
    	level: 0
    });
    
    
    while (queue.length > 0) {
    	var current = queue[0];


    	if (!hash[current.level]) {
    		hash[current.level] = [current.node.val];
    	} else {
    		hash[current.level].push(current.node.val);
    	}

    	if (current.node.left) {
    		queue.push({
    			node: current.node.left,
    			level: current.level + 1
    		});
    	}

    	if (current.node.right) {
    		queue.push({
    			node: current.node.right,
    			level: current.level + 1
    		});
    	}

    	queue.shift();
    	// console.log(hash);
    }
    console.log(hash);

    for (var key in hash) {
    	results.push(hash[key])
    }

    return results
};

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var tree = new TreeNode(10);
tree.left = new TreeNode(5);
tree.right = new TreeNode(15);
tree.right.left = new TreeNode(12);
tree.right.right = new TreeNode(20);
tree.left.left = new TreeNode(8);
tree.left.right = new TreeNode(9);

console.log(levelOrder(tree))