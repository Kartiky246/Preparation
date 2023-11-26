//  It takes an array of promises and returns a new promise as soon as any of the promises in 
//  the iterable fulfills (successfully resolves), with the value of that promise.
//   If all the promises are rejected, it returns a Promise rejected with an AggregateError 
// containing all the rejection reasons
// remeber promise.any got rejected while  .allSettled got resloved

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


const taskList = [asyncTask(2,false),asyncTask(9,false),asyncTask(4,false),asyncTask(1,false)];

Promise.any(taskList).then((data)=>console.log(data))

const myOwnPromiseAny = function(arr){
    let count = 0;
    const errors = [];
    return new Promise((resolve,reject)=>{
        for(let i =0; i<arr.length;i++){
            arr[i].then((data)=>{
               resolve(data); 
            }).catch((e)=>{
                errors[i] = e;
                count++;
                if(count===arr.length) {
                reject(errors);
                }
            })
        }
    })
}

myOwnPromiseAny(taskList).then((data)=>console.log(data)).catch(e=>console.log(e))



