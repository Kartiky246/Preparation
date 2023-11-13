// write a reduce method to find the sum of arr

const arr = [1,2,3,4,5,6,7];

const sum = arr.reduce((acc,curr,i)=>{
    return acc+curr;
},0)
console.log(sum)