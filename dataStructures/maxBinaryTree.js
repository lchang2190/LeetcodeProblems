function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


var maxBT = function (array) {

  if (array.length === 0) {
  	return null;
  }

  var max = Math.max(...array);
  var tree = new TreeNode(max);
  var sliceIndex = array.indexOf(max);

  tree.left = maxBT(array.slice(0, sliceIndex));
  tree.right = maxBT(array.slice(sliceIndex + 1));
  return tree;
}

console.log(maxBT([3,2,1,6,0,5]));


