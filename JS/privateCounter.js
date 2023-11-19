// create a private counter using closure

function counter (){
    var _counter=0;

    function add(a){
        _counter+=a
    }

    function sub(b){
        _counter-=b
    }

    function retrive (){
        return _counter
    } 

    return {
        add, sub, retrive
    }
}

const c = counter();

c.add(1)
c.sub(1)
console.log(c.retrive())

