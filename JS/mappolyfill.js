//write own map method

Array.prototype.myOwnMap = function(fn) {
    const newArr = [];
    for(let i =0; i<this.length;i++){
        newArr.push(fn(this[i],i,this));
    }
    return newArr;
}

console.log([1,2,3,4].myOwnMap((i)=>i+3));