// write a function that would allow to do this-

var addSix = createBase(6);
addSix(10) //return 16
addSix(21) //return 27

function createBase (a){
    return (b)=>{
        console.log(a+b);
    }
}

