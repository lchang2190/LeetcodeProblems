var merge = function(nums1, m, nums2, n) {
	for ( var i = 0; i < n; i++) {
		nums1[m] = nums2[i];
		m++;
	}

	nums1.sort();
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))