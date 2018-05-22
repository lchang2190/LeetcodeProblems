var trailingZeroes = function(n) {
	var inner = function(n){
		if (n === 0) {
			return 1;
		} else {
			return n * trailingZeroes(n-1);
		}
	}

	var result = inner(n);
	return result;
};

console.log(trailingZeroes(5));