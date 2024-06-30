

//  find multiple of n closest to x

const findClosesMultiple = (x,n) =>{
    if(n>=x){
        return n;
    }
    let first = 1;
    let last = x;
    let ans=0;
    while(first<=last){
        const value = Math.floor((first+last)/2);
        if(n*value===x){
            return n*value;
        }
        else if(n*value<x){
            ans =(n*value)
            first++;
        }
        else{
            ans =(n*value)
            last--;
        }
    }
    return ans
}

console.log(findClosesMultiple(9,2));