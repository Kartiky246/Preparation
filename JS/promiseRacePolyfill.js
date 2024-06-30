// takes an iterable of promises as its argument and returns a new promise.
//  This new promise settles (resolves or rejects) as soon as the first promise 
//  in the iterable settles, whether it resolves or rejects. The settled 
//  value or reason from the first settled promise becomes the 
// settled value or reason of the returned promise fff


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


const taskList = [asyncTask(2,false),asyncTask(9,false),asyncTask(4,true),asyncTask(1,true)];

Promise.race(taskList).then((data)=>console.log(data))

const myOwnPromiseRace = function(arr){
    return new Promise((resolve,reject)=>{
        for(let i =0; i<arr.length;i++){
            arr[i].then((data)=>{
               resolve(data); 
            }).catch((e)=>{
                reject(e);
            })
        }
    })
}

myOwnPromiseRace(taskList).then((data)=>console.log(data)).catch(e=>console.log(e))
















