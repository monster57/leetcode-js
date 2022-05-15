var MinStack = function() {

    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.minStack.length){
        this.minStack.push(Math.min(val , this.minStack[this.minStack.length -1]));
    }
    else{
        this.minStack.push(val)
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length){
        this.stack.pop();
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length?this.stack[this.stack.length-1]:null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.length?this.minStack[this.minStack.length-1]:null;
};

let ms = new MinStack();
ms.push(10);
ms.pop();
console.log(ms.stack);
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */