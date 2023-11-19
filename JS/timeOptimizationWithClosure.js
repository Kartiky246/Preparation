
// reduce the compution time of this function

function compute(){
    const a = [];
    for(let i =0; i<10000; i++){
        a[i] = i*1;
    }
    return (index) => a[index] + a[a.length-index];
}

const closureCompute = compute()

console.time('6');
console.log(closureCompute(6));
console.timeEnd('6')
console.time('7');
console.log(closureCompute(7));
console.timeEnd('7')