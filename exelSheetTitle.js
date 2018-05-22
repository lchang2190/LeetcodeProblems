var majorityElement = function(nums) {
  var hash = {};
  var max = 0;
  var result;
  var num = Math.ceil(nums.length/2);

  for (var i = 0; i < nums.length; i++) {
  	if (!hash[nums[i]]){
  		hash[nums[i]] = 1;
  	} else {
  		hash[nums[i]]++;
  	}
  }

  for (var key in hash) {
  	if (hash[key] > max) {
  		max = hash[key];
  		result = key;
  	} 
  }
  console.log(hash);
	return parseInt(result); 
};

console.log(majorityElement([2,2,1,1,1,2,2]))