
var permutations = function(nums) {
	var results = [];

	var permute = function(current, remaining) {
		var current = current || [];
		if (remaining.length === 0) {
			results.push(current);
			return;
		}

		for (var i = 0; i < remaining.length; i++) {
			var currNum = remaining[i];
			permute(current.concat(currNum), remaining.slice(0, i).concat(remaining.slice(i+1)))
		}
	} 

	permute([], nums);
	return results;
}

console.log(permutations([1,1,3]));

var permuteString = function(string) {
	var letters = string.split('');
	var results = [];
	var permute = function(current, remaining) {
		var current = current || [];
		if (remaining.length === 0) {
			results.push(current.join(''));
			return;
		}

		for ( var i = 0; i < remaining.length; i++) {
			var char = remaining[i];
			permute(current.concat(char), remaining.slice(0,i).concat(remaining.slice(i+1)))
		}
	}

	permute('', letters);
	return results;
}

console.log(permuteString('abc'));