const max = 5;

const sum = (...args) =>{
    if(args.length===max) return args.reduce((acc,curr)=>acc+curr);
    const solve = (...args2) =>{
        args = args.concat(args2);
        if(args.length===max) return args.reduce((acc,curr)=>acc+curr)
        return solve
    }
    return solve
}

console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3,4)(5))
console.log(sum(1,2,3)(4)(5))
console.log(sum(1,2)(3)(4)(5))
console.log(sum(1)(2,3,4,5))

// all of the above console should give same sum output