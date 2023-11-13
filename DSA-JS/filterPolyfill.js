const arr = [1,2,3,4,5,6,7,8];

Array.prototype.myOwnFilter = function (fn){
    const arr = this;
    const newArr = [];
    for(let i =0;i<arr.length;i++){
        if(fn(arr[i],i,this)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(arr.myOwnFilter((i)=> i>3 ));