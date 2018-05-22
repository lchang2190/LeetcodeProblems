var reverseWords = function(str) {
    return str.split(" ").filter(x=>x.length > 0).reverse().join(" ");
};

console.log(reverseWords('the sky is blue'));