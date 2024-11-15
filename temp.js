/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.arr = new Array(k);
    this.front = -1;
    this.rare =-1;
    this.size = k;
    
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.rare==this.size-1 && this.front==0){
        return false;
    }
    if(this.front==-1){
        this.front++;
        this.rare++;
        this.arr[this.front] = value;
        return true;
    }
    if(this.rare==this.size-1){
        this.rare = 0;
        this.arr[this.rare] = value;
        return true;
    }else{
        this.rare++;
        this.arr[this.rare] = value;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.front==-1){
        return false;
    }
    
    if(this.rare==this.front){
        this.rare=-1;
        this.front=-1;
        return true;
    }

    if(this.front==this.size-1 && this.rare!=this.front ){
        this.front==0;
        return true;
    }
    this.front++;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.front==-1){
        return -1;
    }else{
        return this.arr[this.front];
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.rare==-1){
        return -1;
    }else{
        return this.arr[this.rare];
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if(this.front==-1){
        return true;
    }
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.rare==this.size-1){
        return true;
    }
    return false;
};

 
//   Your MyCircularQueue object will be instantiated and called as such:
  var obj = new MyCircularQueue(k)
  var param_1 = obj.enQueue(3)
  var param_11 = obj.enQueue(8)
  var param_2 = obj.deQueue()
  var param_11 = obj.enQueue(9)
  var param_3 = obj.Front()
  var param_4 = obj.Rear()
  var param_5 = obj.isEmpty()
  var param_6 = obj.isFull()
 