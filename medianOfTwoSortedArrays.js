// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

var findMedianSortedArrays = function(nums1, nums2) {
    var fullArray = nums1.concat(nums2);
		fullArray.sort(function(a,b) {
    	return a-b;
    });
    console.log(fullArray)
    if (fullArray.length % 2 === 0) {
    	return (fullArray[Math.floor(fullArray.length/2)-1] + fullArray[Math.floor(fullArray.length/2)])/2
    } else {
    	return fullArray[(fullArray.length-1)/2]
    }

};