
const prod = (a,b,c)=>{
    return a*b*c;
}

const curry = (fn,context)=>{
    const f =  (...a)=>{
        if(a.length===fn.length) return fn.apply(context||this,a);
        return (...b)=> f(...a,...b);
    }
    return f;
}

const prodCurry = curry(prod,this);
console.log(prodCurry(2)(2)(3))
