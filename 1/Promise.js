const PENDING = 'pending';
const FULFILLED = 'fulfulled';
const REJECTED = 'rejected';
function Promise(executor) {
    let self = this;// 缓存当前promise 实例
    self.status = 'pending'
    self.onResolveedCallbacks = [];
    self.onRejectedCallbacks = [];
    function resolve(data) {
        if (self.status == PENDING) {
            self.status = FULFILLED;
            self.data= data;
            self.onResolveedCallbacks.forEach(callback => callback(data))
        }
    }
    
    function reject(data) {
        if (self.status == PENDING) {
            self.status = REJECTED;
            self.data = data;
            self.onRejectedCallbacks.forEach(callback => callback(data))
        }
    }

    try {
        executor(resolve,reject)
    }catch (e) {
        reject(e)
    }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : data => data;
    onRejected = typeof onRejected == 'function' ? onRejected : reason => {throw reason};
    if (this.status == FULFILLED) {
        onFulfilled(this.data)
    }
    if (this.status == REJECTED) {
        onRejected (this.data)
    }
    if (this.status == PENDING) {
        this.onResolveedCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
    }
}
module.exports = Promise;
