// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?

var isPalindrome = function(x) {
	//convert integer to string
	var num = x.toString();

	//return true if length is 0 or 1
	if (num.length === 0 || num.length === 1) {
		return true;
	}

	//compare first and last number, if its the same, splice off first and last then recurse
	if (num[0] === num[num.length-1]) {
		return isPalindrome(num.slice(1, num.length-1));
	} else return false
};

console.log(isPalindrome(121))