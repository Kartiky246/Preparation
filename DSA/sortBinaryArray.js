// sort an binary array without any extra space
const sortBinaryArray = (arr) =>{
    let p=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]===0){
          [arr[i],arr[p]] = [arr[p],arr[i]];
          p++
        }
        
        
    }
}