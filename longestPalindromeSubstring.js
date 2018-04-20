// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
	if (s.length === 1){
		return s;
	}
	let result = '';
  var sub;
	var odd = function(i) {
		var pos = i;
		var neg = i;
		while (s[pos] !== undefined && s[neg] !== undefined && s[pos] === s[neg]) {
			pos++;
			neg--;
		}
		sub = s.slice(neg+1, pos);
		if (result.length < sub.length) {
			result = sub;
		}
	}
	var even = function(i) {
		if (s[i] === s[i+1]) {
  		var pos = i+1;
  		var neg = i;
  		while (s[pos] !== undefined && s[neg] !== undefined && s[pos] === s[neg]) {
				pos++;
				neg--;
			}
			sub = s.slice(neg+1, pos);
			if (result.length < sub.length) {
				result = sub;
			}
  	}
	}
  
  for (var i = 0; i < s.length; i++) {
  	even(i);
  	odd(i);
  }
  return result; 
};