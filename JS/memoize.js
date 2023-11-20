
const computeSum = (n)=>{
    let sum=0;
    for(let i =0; i<n;i++){
        sum+=n
    }
    return sum
}


const memoize = (fn) =>{
    const map = new Map();
    return (...args) =>{
        const key = JSON.stringify(args);
        if(!map.has(key)){
            console.log('computing value')
            map.set(key, fn.apply(this,args))
            return map.get(key);
        }
        console.log('fetching value from cache')
        return map.get(key)
    }
}

// const sum = memoize(computeSum);
// console.time('9');
// console.log(sum(9));
// console.timeEnd('9');
// console.time('9 memoized');
// console.log(sum(9));
// console.timeEnd('9 memoized');


// use this memoize function for a recursive callstack


const factorial = memoize((n)=>{
    if(n===0) return 1
    return factorial(n-1)*n
})
console.log(factorial(3));
console.log(factorial(5));