// flatten the nested object

const flattenedObject = (obj,parent)=>{
    const finalObject = {};
    const helper = (obj,parent)=>{

        for(let key in obj){
            const newParent = parent+key;
            const value = obj[key];
            if(typeof value === 'object'){
                helper(value,newParent+'.')
            }
            else{
                finalObject[newParent]=value
            }
        }
    }
    helper(obj,parent);
    return finalObject;
}

console.log(flattenedObject( {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  },''));