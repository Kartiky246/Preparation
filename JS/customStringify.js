
const obj = {
    name:"kartik",
    age:26,
    address:{
        city:"rewari",
        pincode:123401
    },
    wife:null
}

console.log(JSON.stringify(obj))

const customStringify = function(obj){
    if(obj===null)return null
    let s = '{';
    let count = 0;
    for(let key in obj){
        count+=1;
        if(typeof obj[key]!=='object'){
            s+='"' + key + '"'+":"+(typeof obj[key]==='string'? `"${obj[key]}"`: obj[key])
        }
        else{
            s += '"' + key + '"'+":" + customStringify(obj[key])
        }
        if(count!==Object.keys(obj).length){
            s+=","
        }
    }
    s+="}"
    return s;
}

console.log(JSON.parse(customStringify(obj)))