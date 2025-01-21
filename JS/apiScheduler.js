
class ApiScheduler{
    constructor(limit=5){
        this.limit = limit;
        this.queue = [];
        this.activeCount = 0;
    }

    addTask(task){
        return new Promise((res,rej)=>{
            this.queue.push({res,rej,task});
            this.processQueue();
        })
    }

    processQueue(){
        if(this.activeCount>=this.limit || this.queue.length===0){
            return;
        }
        const currentTask = this.queue.shift();
        this.activeCount+=1;
        currentTask.task().then((d)=>{
            currentTask.res(d);
            console.log(`TASK COMPLETED--- with ${d}`)
        }).catch((e)=>{
            currentTask.rej(e);
        }).finally(()=>{
            this.activeCount-=1;
            this.processQueue();
        })
    }
}

const asyncTask = ()=>{
        return fetch('https://dummyjson.com/products');
}

const taskScheduler = new ApiScheduler(5);




taskScheduler.addTask(asyncTask),
taskScheduler.addTask(asyncTask),
taskScheduler.addTask(asyncTask),
taskScheduler.addTask(asyncTask),
taskScheduler.addTask(asyncTask),
taskScheduler.addTask(asyncTask),
taskScheduler.addTask(asyncTask),
taskScheduler.addTask(asyncTask)

