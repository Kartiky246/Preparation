
class CustomEventEmitter{
    constructor(){
        this.eventMap = new Map();
    }

    on = (event,callback)=>{
       if(!this.eventMap.has(event)){
        this.eventMap.set(event,[]);
       }
       this.eventMap.get(event).push(callback);
    }

    remove = (event,callback)=>{
        if(this.eventMap.has(event)){
            const callbacks = this.eventMap.get(event).filter((cb)=>cb!==callback);
            this.eventMap.set(event,callbacks);
        }
    }

    emit = (event,...args)=>{
        if(this.eventMap.has(event)){
            this.eventMap.get(event).forEach((cb)=>cb(...args))
        }
    }
}



const emitter = new CustomEventEmitter();

const greet = (message) => console.log(`Greet: ${message}`);
const farewell = (message) => console.log(`Farewell: ${message}`);


emitter.on('hello', greet);
emitter.on('goodbye', farewell);
emitter.emit('hello', 'Hello, World!'); // Output -> Greet: Hello, World!
emitter.emit('goodbye', 'Goodbye, World!'); // Output -> Farewell: Goodbye, World

