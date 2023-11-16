
// find first pair in the array whose sum is zero
const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

const firstZeroPair = (arr) =>{
    const allItems = new Set();
    for(let i =0; i<arr.length;i++){
        allItems.add(arr[i])
    }
    for(let i =0; i<arr.length;i++){
        if(allItems.has(-arr[i])){
            return [arr[i],-arr[i]]
        }
    }
}

console.log(firstZeroPair(arr));