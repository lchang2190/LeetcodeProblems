// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


function ListNode(val) {
	this.val = val;
	this.next = null;
}

var addTwoNumbers = function(l1, l2) {
	var result = new ListNode(0);
	var carry = 0;
	var current = result

	var digits1 = [];
	var digits2 = [];
	var sums = [];

	var list1 = l1;
	var list2 = l2;

	while (list1) {
		digits1.push(list1.val);
		list1 = list1.next;
	}

	while (list2) {
		digits2.push(list2.val);
		list2 = list2.next;
	}

	while (digits2.length > digits1.length) {
		digits1.push(0);
	}

	while(digits1.length > digits2.length) {
		digits2.push(0);
	}

	for (var i = 0; i < digits1.length; i++) {
		var val = digits1[i] + digits2[i] + carry;
		if (val > 9) {
			carry = 1;
			val = val % 10
			if (digits1.length === 1 || i === digits1.length-1) {
				sums.push(val, carry);
			} else if(sums[i] === undefined) {
				sums.push(val);
			} else {
				sums[i+1] += 1;
			}

		} else {
			sums.push(val);
			carry = 0;
		}
	}
console.log(sums);
	while (sums.length !== 0) {
		var res = sums[0];
		sums.shift();
		current.next = new ListNode(res);
		current = current.next;
	}
	return result.next;
};

var node1 = new ListNode(9);
node1.next = new ListNode(9);
node1.next.next = new ListNode(3);

var node2 = new ListNode(1);
node2.next = new ListNode(6);
node2.next.next = new ListNode(4);




console.log(addTwoNumbers(node1, node2))