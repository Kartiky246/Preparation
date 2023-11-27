// check for the deep equality of two objects in js



const areEqual = (input1, input2) => {
    if(Object.keys(input1)?.length!==Object.keys(input2)?.length) return false;
    
    for(const key in input1){
        const val1 = input1[key];
        const val2 = input2[key];
    const areObject = val1 && typeof val1==='object' && val2 && typeof val2 ==='object';
        if(areObject){
            if(!areEqual(val1,val2)) return false;
        }
        else{
            if(val1!==val2) return false
        }
    }
    return true;
}


const obj1 = {
    name: "learnersbucket",
    details: {
        x: [1, 2],
        y: 2,
    },
};
const obj2 = {
    name: "learnersbucket",
    details: {
        y: 2,
        x: [1, 2],
    },
};

console.log(areEqual(obj1, obj2))




