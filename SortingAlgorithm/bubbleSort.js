var bubbleSort = function(array) {
	var len = array.length;

	for (var i = 0; i < len; i++) {
		for (var j = i+1; j < len; j++) {
			if (array[j] < array[i]) {
				var temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
	}
	return array;
}

var bubbleSort2 = function(array) {
	var isSorted = true;
	for (var i = 0; i < array.length; i++) {
		if (array[i+1] < array[i]) {
			var temp = array[i+1];
			array[i+1] = array[i];
			array[i] = temp;
			isSorted = false;
		}
	}

	if(!isSorted) {
		bubbleSort2(array);
	}

	return array;
}
console.log(bubbleSort2([19,32,4,56,33,12,4,3]))

