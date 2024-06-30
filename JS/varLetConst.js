const computeSum = (n)=>{
    let sum=0;
    for(let i =0; i<n;i++){
        sum+=i
    }
    return sum
}


console.time("7");
console.log(computeSum(7));
console.timeEnd('7')

console.time("10");
console.log(computeSum(10));
console.timeEnd('10')