var maxSubArray = function(nums) {
	let count = 0;
	let max = nums[0];

	for (var i = 0; i < nums.length; i++) {

		if (count > 0) {
			count += nums[i];
		} else {
			count = nums[i];
		}

		if (count > max) {
			max = count;
		}

	}

	return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1,2]))