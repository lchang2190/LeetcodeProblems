function ListNode(val) {
	this.val = val;
	this.next = null;
}

var hasCycle = function(list) {
	if (!list){
		return false;
	}
	var fast = list.next;
	var slow = list;

	while (fast) {
		if (fast === slow) { 
			return true
		}
		if (fast.next === null || slow.next === null ){
			return false;
		}

		fast = fast.next.next;
		slow = slow.next;
	}
	return false;
} 