function ListNode(val) {
	this.val = val;
	this.next = null;
}

var mergeTwoLists = function(l1, l2) {
	var mergedLink;
	if (!l2) {
		return l1;
	}
	if (!l1) {
		return l2;
	}

	if (l1 && l2){
		if (l1.val < l2.val) {
			mergedLink = new ListNode(l1.val)
			var pointer1 = l1.next;
			var pointer2 = l2;
		} else {
			mergedLink = new ListNode(l2.val)
			var pointer1 = l1;
			var pointer2 = l2.next;
		}
	}

	var current = mergedLink;

	while(pointer1 !== null || pointer2 !== null) {
		if (pointer1 === null) {
			current.next = new ListNode(pointer2.val);
			current = current.next;
			pointer2 = pointer2.next;
		} else if (pointer2 === null) {
			current.next = new ListNode(pointer1.val);
			current = current.next;
			pointer1 = pointer1.next;
		} else if (pointer1.val < pointer2.val) {
			current.next = new ListNode(pointer1.val);
			current = current.next;
			pointer1 = pointer1.next;
		} else if ( pointer2.val < pointer1.val) {
			current.next = new ListNode(pointer2.val);
			current = current.next;
			pointer2 = pointer2.next;
		} else if (pointer1.val === pointer2.val) {
			current.next = new ListNode(pointer1.val);
			current = current.next;
			pointer1 = pointer1.next;

			current.next = new ListNode(pointer2.val);
			current = current.next;
			pointer2 = pointer2.next;
		} 
	}

	return mergedLink
};

var link1 = new ListNode(1);
// link1.next = new ListNode(2);
// link1.next.next = new ListNode(4);

var link2 = new ListNode(1);
link2.next = new ListNode(2);
link2.next.next = new ListNode(4);

console.log(mergeTwoLists(link1, link2));
console.log(mergeTwoLists(link1, null));