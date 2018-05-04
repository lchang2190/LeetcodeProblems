var ListNode = function(val) {
	this.value = val;
	this.next = null;
}

var removeNthFromEnd = function(head, n) {
	if (head.next === null && n === 1) {
		head.value = null;
		return null;
	}
	var count = 0;
	var current = head;

	while (current) {
		count++;
		current = current.next;
	}

	var toLast = count - n;

	if (count === n) {
		return head.next;
	}

	var prev = null;
	var curr = head;
	count = 0;

	while (curr) {
		prev = curr;
		curr = curr.next;
		count++;
		if (count === toLast) {
			prev.next = curr.next;
		}
		
	}

	return head;
};


var Ll = new ListNode(1);
Ll.next = new ListNode(2);
// Ll.next.next = new ListNode(3);
// Ll.next.next.next = new ListNode(4);
// Ll.next.next.next.next = new ListNode(5);
// Ll.next.next.next.next.next = new ListNode(6);

console.log(removeNthFromEnd(Ll, 2))
console.log(Ll);