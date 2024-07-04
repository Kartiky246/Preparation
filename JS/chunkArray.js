// Write a function which will take array and chunk amount and return the chunkes of array in an outer array
// make chunk of remaining values if chunk amount > remaining values

const chunk = (arr,chunkAmount) =>{
    if(chunkAmount>arr.length) return [arr];
    const res =[];
    for(let i=0;i<arr.length-chunkAmount;i+=chunkAmount){
        const chunkData = [];
        for(let j =0; j<chunkAmount;j++){
            chunkData.push(arr[i+j]);
        }
        res.push(chunkData)
    }
    if(chunkAmount*res.length<arr.length){
        const lastChunk = [];
        for(let i = chunkAmount*res.length; i<arr.length;i++){
            lastChunk.push(arr[i]);
        }
        res.push(lastChunk)
    }
    return res;
}

console.log(chunk([1,2,3,4,5,6,7,8,9],4))
// output: [[1,2,3,4], [5,6,7,8], [9]]
