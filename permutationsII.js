var permuteUnique = function(nums) {
    var results = [];
    var resultStrings = [];
    
    var innerPerm = function(current, remain) {
        current = current || [];
        if (remain.length === 0) {
            if ( resultStrings.indexOf(JSON.stringify(current)) < 0) {
                resultStrings.push(JSON.stringify(current));
                results.push(current);
            }
            return;
        }
        
        for (var i = 0; i < remain.length; i++) {
            var num = remain[i];
            innerPerm(current.concat(num), remain.slice(0,i).concat(remain.slice(i+1)))
        }
    }
    
    innerPerm([], nums);
    console.log(resultStrings)
    return results;
    
};

console.log(permuteUnique([1,1,2]))