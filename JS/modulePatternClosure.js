// ..create a module pattern using closure


var module = () => {
    function privateMethod(){

    }

    return {
        publicsMethod: ()=>console.log('call from public method')
    }
}
module().publicsMethod()
module().privateMethod()