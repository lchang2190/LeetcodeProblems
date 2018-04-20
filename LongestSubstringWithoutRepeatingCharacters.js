// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s) {
    //return 1 if only one letter
    if (s.length === 1){
        return 1;
    }
    var result = '';

    //loop through with 1st pointer
    for (var i = 0; i < s.length; i++) {
        var obj = {};
        obj[s[i]] = 1;
        //loop through with 2nd pointer
        for (var j = i+1; j < s.length; j++) {
            //use hash to record letter occurence
            if (obj[s[j]] === undefined){
                obj[s[j]] = 1;
                //if 2nd pointer reaches the end, set result to current substring
                if (j === s.length-1) {
                  var sub = s.slice(i,j+1);
                  if (result.length < sub.length) {
                    result = sub;
                  }  
                }
            //if obj key already exists, compare length of substring with whats stored in results
            } else {
                var sub = s.slice(i,j);
                if (result.length < sub.length) {
                    result = sub;
                }
                break;
            }

        }
    }
    return result.length;
};

console.log(lengthOfLongestSubstring('aabcd'))

