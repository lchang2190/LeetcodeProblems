var maxProduct = function(nums) {
	var max = 0;
	var count = 0;
	if (nums.length ===1) {
		return nums[0];
	}
 
 	for (var i = 0; i < nums.length; i++) {
 			count = nums[i];
 			if (count > max){
 				max = count;
 			}
	 		for (var j = i+1; j < nums.length; j++) {
	 			count *= nums[j];
	 			if (count > max) {
	 				max = count;
	 			}
	 		}
 	}

	return max;
};

console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([-4,-3]));
console.log(maxProduct([0,2]));