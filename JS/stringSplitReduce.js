const s = 'I am going to have a walk to london where are you going to';

String.prototype.myOwnSplit = function(del){
    const res = [];
    if(del==='') return [...this];
    const solve = (s,i) =>{
        const index = s.indexOf(del);
        if(index!==-1){
            res.push(s.substring(0,index));
            solve(s.substring(index+del.length),index+del.length)
        }
        else{
            res.push(s);
        }
    }
    
    solve(this,0);
    return res
    
}

console.log(s.myOwnSplit(''))
console.log(s.split(''))





