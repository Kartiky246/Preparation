const arr = [0,2,3,4,5,6,7,8,9,5];

Array.prototype.myOwnReduce = function(fn,initalValue){
    let value = initalValue;
    for(let i =0; i<this.length;i++){
        value =  fn(value,this[i],i,this) 
    }
    return value
}

console.log(arr.myOwnReduce((acc,curr)=> acc*curr,0))