var twoSum = function(nums, target) {
    var hash = {};

    for ( var i = 0; i < nums.length; i++) {
    	if (hash[nums[i]] !== undefined) {
    		return [hash[nums[i]], i]
    	} else {
    		hash[target-nums[i]] = i;
    	}
    }
};
console.log(twoSum([1,2,3,4,5,6], 3))