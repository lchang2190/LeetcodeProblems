var merge = function(intervals) {

	for (var i = 0; i < intervals.length; i++) {
		if (intervals[i+1] !== undefined) {
			if (intervals[i+1][0] <= intervals[i][1] ) {
				intervals[i][1] = intervals[i +1][1];
				intervals.splice(i+1,1);
			} 
	}
		

	}    
	return intervals;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))
