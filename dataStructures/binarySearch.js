var binarySearch = function(array, target) {
	var min = 0;
	var max = array.length -1;
	var mid;
	
	while (min <= max) {
		mid = Math.floor((min + max)/2);
		if (array[mid] < target) {
			min = mid +1;
		} else if (array[mid] > target) {
			max = mid -1;
		} else {
			return mid;
		}
	}

	return 'not found';

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 16))