var lengthOfLastWord = function(s) {
  var words = s.split(' ');
  while(words[words.length-1] === '') {
  	words.pop();
  }
  console.log(words);
  if (words.length === 0) {
  	return 0;
  }
  return words[words.length-1].length;  
};

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('a '))
console.log(lengthOfLastWord(' '))