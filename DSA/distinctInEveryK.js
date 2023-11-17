// find number of distinct elemnt in every window of size k 

const distinctWindow = (A,k) =>{
   let res = [];
   const map = new Map();
   for(let i =0; i<k;i++){
    map.set(A[i],map.get(A[i]) ? map.get(A[i]) + 1 : 1);
   }
   res.push(map.size);

   for(let i =k; i<A.length;i++){
    if(map.get(A[i-k])>1){
        map.set(A[i-k],map.get(A[k]-1))
    }
    else{
        map.delete(A[i-k])
    }
    map.set(A[i], map.get(A[i]) ?map.get(A[i]) + 1 :1 )
    res.push(map.size)
   }
   return res;
}

console.log(distinctWindow([78, 16, 94, 36, 87, 93, 50, 22, 63, 28, 91, 60, 64, 2],5))