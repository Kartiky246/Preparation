const arr = [0,2,3,4,5,6,7,8,9,5];

Array.prototype.myReduce = function(fn,initialValue){
    if(initialValue===undefined && this.length===0){
        throw new TypeError("Reduce of empty array with no initial value");
    }
    if(initialValue===undefined) initialValue=this[0];
    let res = initialValue;
    for(let i = res===initialValue?1:0; i<this.length;i++){
        res = fn(res,this[i],i,this);
    }
    return res;
}

console.log(arr.myOwnReduce((acc,curr)=> acc+curr))