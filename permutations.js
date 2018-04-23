var permutations = function(string) {
	var results = [];
	if (string.length === 1) {
		results.push(string);
		return results;
	}

	for (var i = 0; i < string.length; i++) {
		var first = string[i];
		var remain = string.substr(0, i) + string.substr(i+1);
		// console.log(remain);
		var innerPerm = permutations(remain);

		for (var j = 0; j < innerPerm.length; j++) {
			results.push(first+innerPerm[j])
		}
	}

	return results;
}

console.log(permutations('abc'))