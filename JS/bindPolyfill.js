const obj = {
    name:'kartik'
}

function sayName(...args){
    console.log(this.name)
    for(let i =0;i<args.length;i++){
        console.log(i)
    }
}
const v = sayName.bind(obj,1,2,3,4);
v()

Function.prototype.myOwnBind = function(ref={},...args){
    if(typeof this !=='function'){
        throw new Error('Not a valid function to call my custom bind method')
    }

    ref.fn = this
    return function helperFunction(){

        return ref.fn(...args)
    }
}

const m = sayName.myOwnBind(obj,1,2,3,)
m()