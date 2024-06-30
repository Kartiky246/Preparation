// promise.allSettle take array of promise and resolved completely when all of then settled
// it return status of all promise and value and reson for failure

// sample response of promise.allSettled() ->

// [
//     { status: 'fulfilled', value: 2 },
//     { status: 'fulfilled', value: 39 },
//     { status: 'rejected', reason: "this promise don't want to resolved" },
//     { status: 'fulfilled', value: 1 }
//   ]


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


const taskList = [asyncTask(2,true),asyncTask(39,true),asyncTask(4,false),asyncTask(1,true)];

Promise.allSettled(taskList).then((data)=>console.log(data))

const myOwnPromiseSettled = function (arr){
    return new Promise((resolve,reject)=>{
        const res = new Array(arr.length).fill(0);
        let count = 0;
        for(let i =0; i<arr.length;i++){
            arr[i].then((data)=>{
                const successObj = {
                    status: 'fulfilled',
                    value: data
                }
                res[i] = successObj;
                count++;
            if(count===arr.length) resolve(res)
            }).catch((e)=>{
                const errorObj = {
                    status: 'rejected',
                    reason: e
                }
                res[i] = errorObj;
                count++;
                if(count===arr.length) resolve(res)
            })
        }
    })
}

myOwnPromiseSettled(taskList).then(data=>console.log(data))
