const s = 'Hi Mr. {{name}}, are you from {{city}}';
const obj = {
    name:'kartik',
    city:'rewari'
}

const stringReplacement = (s,obj) => {
    for(let key in obj){
        while(s.includes(`{{${key}}}`)){
            s = s.replace(`{{${key}}}`, obj[key])
        }
    }
    return s;
}

console.log(stringReplacement(s,obj))