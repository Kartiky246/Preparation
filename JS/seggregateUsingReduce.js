// convert this array [1.1, 1.2, 1.3, 2.2, 2.3, 2.4,3.0,3.1,3.5,2.4];
//  to {
//   '1': [ 1.1, 1.2, 1.3 ],
//   '2': [ 2.2, 2.3, 2.4, 2.4 ],
//   '3': [ 3, 3.1, 3.5 ]
// }


const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4,3.0,3.1,3.5,2.4];

const ans = arr.reduce((acc,curr)=>{
    const floorValue = Math.floor(curr);
    if(!acc[floorValue]){
        acc[floorValue] = [curr]
    }
    else{
        acc[floorValue].push(curr)
    }
    return acc
},{})

console.log(ans)