// promise.all take an array of promises and resloved when all of them resolved and return data in array
// in same order and if any of the promise failed promise.all reject and give error for first failure


const asyncTask = (n) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(n)
        },n*1000);
    })
}

const taskList = [asyncTask(2),asyncTask(39),asyncTask(4),asyncTask(1)];

Promise.all(taskList).then((data)=>console.log(data))

const myOwnPromiseAll = (arr) =>{
    let count = 0;
    return new Promise((resolve,reject)=>{
    const res = new Array(arr.length).fill(0)
        for(let i =0; i<arr.length;i++){
            arr[i].then((data) =>{
                res[i] = data;
                count++;
                if(count===arr.length){
                    resolve(res);
                }
            }).catch((e)=>{
                console.error(e)
                reject(e);
            })
        }
    })

}

myOwnPromiseAll(taskList).then((data)=>console.log(data))


// in Angular promise.all ===> forkJoin()