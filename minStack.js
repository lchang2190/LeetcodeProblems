/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack = [];
	this.removed;
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	if (x < this.stack[0]) {
		this.stack.unshift(x);
	}
	if (this.stack.length === 0) {
		this.stack.push(x);
	} else {
		for (var i = 0; i < this.stack.length; i++) {
			if(this.stack[i+1] === undefined && x > this.stack[i]){
				this.stack.push(x);
			}
			if (x > this.stack[i] && x < this.stack[i+1]) {
				this.stack.splice(i+1,0,x);
				break;
			}
		}
	}
  console.log(this.stack);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.removed = this.stack.pop();
	console.log(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.removed;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.stack[0];
    
};

var stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
stack.pop();
console.log(stack.top());
console.log(stack.getMin());