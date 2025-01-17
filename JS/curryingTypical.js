const max = 5;


function sum(...a){
    if(a.length===max) return a.reduce((acc,curr)=>acc+curr,0);
    return (...b)=> sum(...a,...b)
}
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3,4)(5))
console.log(sum(1,2,3)(4)(5))
console.log(sum(1,2)(3)(4)(5))
console.log(sum(1)(2,3,4,5))

// all of the above console should give same sum output