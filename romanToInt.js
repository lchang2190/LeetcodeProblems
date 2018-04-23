var romanToInteger = function(roman) {
	var obj = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	}

	var result = 0;

	while(roman.length > 0) {
		if (obj[roman.substr(0,2)]) {
			console.log(obj[roman.substr(0,2)])
			result += obj[roman.substr(0,2)];
			roman = roman.substr(2);
		} else {
			result += obj[roman[0]];
			roman = roman.substr(1);
		}
	}
	
	return result
}

console.log(romanToInteger('MMMCCCXLII'))