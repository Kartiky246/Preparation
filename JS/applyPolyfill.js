const obj = {
    name:'kartik'
}

function sayName(...args){
    console.log(this.name)
    for(let i =0;i<args.length;i++){
        console.log(i)
    }
}
 sayName.apply(obj,[1,2,3,4])

 Function.prototype.myOwnApply = function (ref={},arg=[]){
    if(typeof this !=='function'){
        throw new Error('Not a valid function, can not call my custom apply')
    }
    ref.fn = this;
    return ref.fn(...arg)
 }

 sayName.myOwnApply(obj,[1,2,3])