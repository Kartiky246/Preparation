// implemet sum(a)(b)(c)

function outerSum(){
    let sum =0;
    const currying = (a)=> {
        if(a){
            sum+=a;
            return currying
        }
        else{
            console.log(sum);
            return ;
        }
    }
    return currying;
}

const sum = outerSum();

sum(1)(2)(3)(4)