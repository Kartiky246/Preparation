const obj = {
    name:'kartik'
}

function sayName(...args){
    console.log(this.name)
    for(let i =0;i<args.length;i++){
        console.log(i)
    }
}
 sayName.call(obj,1,2,3,4)

 Function.prototype.myOwnCall = function(ref={},...args){
    if( typeof this!=='function'){
        throw new Error('Not a valid function, can not use my custom call method on it ');
    }
    ref.fn = this;
    return ref.fn(...args)
 }

 sayName.myOwnCall(obj,1,2,3,4)