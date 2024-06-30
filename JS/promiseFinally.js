// callback to be invoked when promise is settled

const asyncTask = (n,success) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(success){
        resolve(n)
        }
        else{
            reject(`this promise don't want to resolved`)
        }
        },n*1000);
    })
}

asyncTask(10,true).then((data=>console.log(data))).catch((e)=>console.error(e)).finally(()=>console.log("process completed"))

Promise.prototype.myOwnFinally = function(fn){
    this.then((data)=>{
            fn()
    }).catch((e)=>{
        fn()
    })
}

asyncTask(10,true).then((data=>console.log(data))).catch((e)=>console.error(e)).myOwnFinally(()=>console.log("process completed"))

