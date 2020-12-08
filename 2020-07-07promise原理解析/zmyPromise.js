class KPromise{
	constructor(handle){
		this.status = "pending";
		this.value = undefined;
		this.resolvedQueue = [];
		this.rejectedQueue = [];
		handle(this._resolve.bind(this),this._reject.bind(this));
	}
	_resolve(val){
		//改变状态及value
		this.status = "resolved";
		this.value = val;
		let run = () => {
			let cb;
			while(cb = this.resolvedQueue.shift()) {
				cb(val);
			}
		};
		//setTimeout(run,0)
		let observer = new MutationObserver(run)
        observer.observe(document.body,{
            attributes: true
        })
        document.body.setAttribute("kkb",Math.random());
	}
	_reject(err){
		this.status = "rejected";
		this.value = err;
		let run = () => {
			let cb;
			while(cb = this.rejectedQueue.shift()) {
				cb(err);
			}
		};
		//setTimeout(run,0);
		let observer = new MutationObserver(run)
        observer.observe(document.body,{
            attributes: true
        })
        document.body.setAttribute("kkb",Math.random());
	}
	then(onResolved,onRejected){
		// this.resolvedQueue.push(onResolved);
		// this.rejectedQueue.push(onRejected);
		return new KPromise((resolve,reject) => {
			this.resolvedQueue.push(val => {
				val = onResolved && onResolved(val);
				if(val instancesof KPromise) {
					return val.then(resolve);
				}
				resolve(val);
			})
			this.rejectedQueue.push(err => {
				err = onRejected && onRejected();
				reject(err);
			})
		})
	}
}