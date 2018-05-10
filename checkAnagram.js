var checkAnagram = function(string1, string2) {
	var hash1 = {},
			hash2 = {},
		  count = string1.length + string2.length;

	for (var i = 0; i < string1.length; i++) {
		if (!hash1[string1[i]]) {
			hash1[string1[i]] = 1;
		} else {
			hash1[string1[i]]++;
		}
	}

	for ( var j = 0; j < string2.length; j++) {
		if (!hash2[string2[j]]) {
			hash2[string2[j]] = 1;
		} else {
			hash2[string2[j]]++;
		}
	}
	if (Object.keys(hash1).length === 1 && Object.keys(hash2).length === 1) {
		return hash1[Object.keys(hash1)[0]] - hash2[Object.keys(hash2)[0]];
	}

	for (var key in hash1) {
		if ( hash2[key]) {
			count = count - 2;
		}
	}

	return count;
}
console.log(checkAnagram('cde', 'abc'));
console.log(checkAnagram('bess', 'count'));
console.log(checkAnagram('ssss', 's'));
console.log(checkAnagram('ab', 'de'))
console.log(checkAnagram('ssss', 'ss'))
console.log(checkAnagram('', ''))
