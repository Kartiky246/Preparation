
const customDebounce = (callback,time, immediate, context=this)=>{
    let timer;
    return (...args)=>{
        let callNow = immediate && !timer;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = null;
            if(!immediate){
                callback.apply(context,args);
            }
        },time)
        if(callNow){
            callback.apply(context,args);
        }
    } 
}

const greet = (name)=>console.log(`Hi ${name}`);

const debounceGreet = customDebounce(greet,400,true);

debounceGreet('Kartik');
debounceGreet('a');
debounceGreet('b');
debounceGreet('c');
setTimeout(()=>debounceGreet('d'),400)
