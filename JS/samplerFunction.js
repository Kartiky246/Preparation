// Create a function in JavaScript that accepts a function as input and a count and executes that input function
//  once for a given count of calls. Known as sampling function.


const sampler = (fn, count, ctx)=>{
    let counter = 0;
    const context = ctx ?? this
    return function(...args){
        counter+=1;
        if(counter<count){
         return
        }
        counter = 0;
        fn.call(context,...args);
    }
}

const greet = function(a,b,c){
    console.log(`Hi ${this.name}`,a,b,c)
}
greet.call({name:'k'},12,3,4)

const logger = sampler(greet,2, {name:'kartik'})
logger(1,2,3)
logger(4,5,6)
logger(7,8,9)
logger(10,11,12)
logger(13,14,15)
logger(16,17,18)
logger(19,20,21)
logger(22,23,24)


