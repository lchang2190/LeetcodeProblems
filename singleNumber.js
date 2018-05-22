var singleNumber = function(nums) {
	var hash = {};

	for (var i = 0; i < nums.length; i++) {
		if (!hash[nums[i]]){
			hash[nums[i]] = 1;
		} else {
			hash[nums[i]]++;
		}
	}

	for (var key in hash){
		if (hash[key] === 1){
			return parseInt(key);
		}
	}
};

console.log(singleNumber([4,1,2,1,2]))