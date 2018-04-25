var validParens = function(string) {
	var stack = [];

	var parens = {
		'(': ')',
		'{': '}',
		'[': ']'
	}

	for (var i = 0; i < string.length; i++) {
		if (parens[string[i]]) {
			stack.push(string[i]);
		} else if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
			if (parens[stack.pop()] !== string[i]) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

console.log(validParens('()[]{}'))
console.log(validParens('({[]})'))
console.log(validParens('[})()]'))