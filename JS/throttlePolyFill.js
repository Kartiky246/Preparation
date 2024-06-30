const throttle = (fn,delay)=>{
	let last = 0;
	return (...args) => {
		if(new Date.getTime()-last<delay) return
		fn.apply(this,args);
		last = new Date.getTime()

	}
}