// Write a function which will take array and chunk size and return the chunkes of array in an outer array
// If number of elements are less than chunk size then included all the elements in that chunk.

const chunk = (arr,chunkSize) =>{
    if(chunkSize>arr.length) return [arr];
    const res =[];
    for(let i=0;i<arr.length-chunkSize;i+=chunkSize){
        const chunkData = [];
        for(let j =0; j<chunkSize;j++){
            chunkData.push(arr[i+j]);
        }
        res.push(chunkData)
    }
    if(chunkSize*res.length<arr.length){
        const lastChunk = [];
        for(let i = chunkSize*res.length; i<arr.length;i++){
            lastChunk.push(arr[i]);
        }
        res.push(lastChunk)
    }
    return res;
}

console.log(chunk([1,2,3,4,5,6,7,8,9],4))
// output: [[1,2,3,4], [5,6,7,8], [9]]
