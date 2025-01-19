function CustomPromise(executor){
    let onResolve,onReject;
    let state='pending';
    let result=undefined;
    let isCalled=false;
    let isFullfiled=false;
    let isRejected=false;
    if(typeof executor !=='function') throw new Error("Executor must be a function");

    const resolver = (data)=>{
        isFullfiled=true;
        result = data;
        if(!isCalled && onResolve){
            isCalled = true;
            onResolve(data);
        }
    }

    const rejector = (error)=>{
        isRejected=false;
        result = error;
       if(!isCalled && onReject){
            isCalled = true;
            onReject(error);
       }
    }

    this.then = (callback)=>{
        onResolve = callback;
        if(!isCalled && isFullfiled){
            isCalled = true;
            onResolve(result);
        }
        return this;
    }

    this.catch = (callback)=>{
        onReject = callback;
        if(!isCalled && isRejected){
            onReject(result)
        }
        return this;
    }

    executor(resolver,rejector);
    return {state,result,...this};
}   

const p = new CustomPromise((res,rej)=>{
    res("Kartik")
});


p.then(d=>console.log(d))