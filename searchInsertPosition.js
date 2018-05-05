var searchInsertPosition = function(array, target) {
	if(array[array.length-1] < target) {
		return array.length;
	}
	for (var i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		} else if (array[i] > target) {
			return i;
		} 
	}

}

console.log(searchInsertPosition([0,1,3,5,6,8,10], 11))