const json = {
    "hi MY NAME iS" :'kartik',
    "Where do YOu live": 'Bangalore',
    "AdditionAl deTails" : {
        "aGe is":24
    }
}

const caseConvertor = (json, caseType) => {
    const finalObj = {};
    
    for(let key in json){
        const keyData = key.split(" ");
        for(let i =0; i<keyData.length;i++){
            let currentStr = keyData[i].toLowerCase();
            if(i!==0){
                currentStr = currentStr[0].toUpperCase() + currentStr.substring(1);
            }
            keyData[i] = currentStr;
        }
        if(caseType==='snakeCase'){
            if(typeof json[key]!=='object'){
                finalObj[keyData.join("_")] = json[key]
            }
            else{
                finalObj[keyData.join("_")] = caseConvertor(json[key],caseType)
            }
        }
        else{
            if(typeof json[key]!=='object'){
                finalObj[keyData.join("")] = json[key]
            }
            else{
                finalObj[keyData.join("")] = caseConvertor(json[key], caseType)
            }
        }
    }
    return finalObj;
}




console.log(caseConvertor(json,'snakeCase'))