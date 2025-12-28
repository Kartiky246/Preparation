// You’re given a nested array like [0, 1, [2, [3, 4]], 5], and the goal is to flatten it recursively — essentially
//  recreating the native Array.prototype.flat() method without using built-in utilities.

// input= [0, 1, 2, [3, 4], [5, 6], [1, 2, 3, [4, [6, 7]]]]

// output =  [0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 6, 7]

Array.prototype.myFlatArr =  function(depth){
    const res = [];
    
    const helper = (arr, level = 0)=>{
        for(let i = 0; i < arr.length; i ++){
            if(Array.isArray(arr[i]) && level < depth){
                helper(arr[i], level+1);
            }
            else{
                res.push(arr[i]);
            }
        }
    }
    helper(this);
    return res;
}

const input = [0, 1, 2, [3, 4], [5, 6], [1, 2, 3, [4, [6, 7]]]];

console.log('1', input.flat(-1));
console.log('2', input.myFlatArr(-1));
