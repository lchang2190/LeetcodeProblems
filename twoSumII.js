var twoSum = function(numbers, target) {
	var results = [];

	for (var i = 0; i < numbers.length; i++) {
		for(var j = i+1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === target) {
				results.push(i+1, j+1);
				break;
			}
		}
	}
	return results;
};

console.log(twoSum([2,7,11,15], 9));