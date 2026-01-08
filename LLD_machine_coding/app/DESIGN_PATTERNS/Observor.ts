// An observore / pub-sub systen consists of following:
// 1. Host: It will maintain the list of observers.Provides option to subscribe and unsubscribe to the observers.
// Notifies the observer when state changes
// .2. Observer: Has a function that gets called/invoked every time a state changes.

class Publisher {
    private static _observors: {callback: (data:any) => void, key: string}[] = [];
    publisherKey: string;

    constructor(key: string){
        this.publisherKey = key
    }

    publish(data: any){
       Publisher._observors.forEach((p)=>{
        if(p.key === this.publisherKey){
            p.callback(data);
        }
       })
    }

    observe(cb: (data:any)=>void){
        Publisher._observors.push({callback: cb, key: this.publisherKey})
    }

    unObserve(){
        Publisher._observors = Publisher._observors.filter(p=>p.key!==this.publisherKey);
    }
}

const p1 = new Publisher('p1');

const p2 = new Publisher('p2');


p1.observe( (v)=>{
    console.log( `Recieved from p1 ${v}`);
})

p2.observe((v)=>{
    console.log( `Recieved from p2 ${v}`);
})


p1.publish(2)
p1.publish(4)
p2.publish(8)
p2.publish(6)

p2.unObserve();

p1.publish(12)
p1.publish(14)
p2.publish(18)
p2.publish(16)