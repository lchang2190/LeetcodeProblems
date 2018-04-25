var threeSum = function(nums) {
	var results = [];
	var dups = [];

	if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) {
		results.push(nums);
		return results;
	}
	for (var i = 0; i < nums.length; i++) {
		for (var j = 0; j < nums.length; j++) {
			for (var k = 0; k < nums.length; k++) {
				if ( nums[i] + nums[j] + nums[k] === 0 && i !== j && i !== k && j !== k) {
					var combo = [];
					combo.push(nums[i], nums[j], nums[k]);
					combo.sort(function(a,b) {
						return a-b;
					})

					// console.log(dups);

					if (dups.indexOf(JSON.stringify(combo)) === -1) {
						results.push(combo);
						dups.push(JSON.stringify(combo));
					};
				}
			}
		}

	}

	return results;
};

console.log(threeSum([-1,0 , 1, 2, -1, -4]))
console.log(threeSum([1, 2, -2, -1]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([3,0,-2,-1,1,2]))