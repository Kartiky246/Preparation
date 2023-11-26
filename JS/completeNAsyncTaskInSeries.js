
//run n promises in sequences

const asyncTask = (n) =>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve(`completing ${n}`)
        },n*1000)
    })
}

const promises = [asyncTask(3),asyncTask(4),asyncTask(2),asyncTask(6)];

const seriesExecuter = (promises) => {
    promises.reduce((acc,cur)=>{
        return acc.then(()=>{
            return cur.then((v)=>console.log(v))
        })
    },Promise.resolve())
}
seriesExecuter(promises)