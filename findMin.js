var findMin = function(nums) {
	var start = 0;
	var end = nums.length-1;

	while (start <= end) {
		mid = Math.floor((start+end)/2);

		if (nums[mid] < nums[end]) {
			end = mid;
		} else if (nums[mid] < nums[end]) {
			start = mid+1;
		} else {
			return nums[mid]
		}
	}
};

// console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([4,5,6,7,8,1,2]))