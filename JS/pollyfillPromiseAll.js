// create a polyfill for promise.all

const dummyAsyncTask = (time) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(time)
            resolve(time)
        },time)
    })
}

Promise.all([dummyAsyncTask(2000),dummyAsyncTask(1000),dummyAsyncTask(4000),dummyAsyncTask(6000)]).then((d)=>console.log(d))

const myCustomPromise = (tasks) =>{
    return new Promise((resolve,reject)=>{
        const outPutData =[];
        for(let i =0; i<tasks.length;i++){
            tasks[i].then((data)=>{
                outPutData[i]=data;
                if(i===tasks.length-1){
                resolve(outPutData);
                }

            }).catch((err)=>{
                reject(err)
            })
        }
    })
}

myCustomPromise([dummyAsyncTask(2000),dummyAsyncTask(1000),dummyAsyncTask(4000),dummyAsyncTask(6000)]).then((d)=>console.log(d))
