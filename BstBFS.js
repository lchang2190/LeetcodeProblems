function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function levelOrderSearch(rootNode) {
  // Check that a root node exists.
  if (rootNode === null) {
    return;
  }

  var queue = [];
  queue.push(rootNode);

  while (queue.length > 0) {
    var current = queue[0];

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }

    console.log(queue.shift().val);
    // queue.shift();
  }
}

var tree = new TreeNode(10);
tree.left = new TreeNode(5);
tree.right = new TreeNode(15);
tree.right.left = new TreeNode(12);
tree.right.right = new TreeNode(20);

console.log(levelOrderSearch(tree))