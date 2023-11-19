function print(){
   for(let i =0; i<9;i++){
    setTimeout(()=>console.log(i),i*1000)
   }
}

// print()

// do the above thing without using let in for loop

function intervalPrint(){
    for(var i =0; i<9;i++){
        function innerP(i){
            setTimeout(()=>console.log(i),i*1000)
        }

        innerP(i)
    }
}

intervalPrint()