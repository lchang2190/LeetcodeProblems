var longestCommonPrefix = function(str) {
	var common = '';

	for (var i = 0; i < str[0].length; i++) {
		for (var j = 0; j < str.length; j++) {
			if (str[j][i] !== str[0][i]) {
				return common;
			}
		}
		common += str[0][i];
	}
	return common;
};

console.log(longestCommonPrefix(['f', 'f']));
