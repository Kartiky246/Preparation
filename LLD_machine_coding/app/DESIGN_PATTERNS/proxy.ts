// In this pattern whenever a consumer try to read or update an object/ resource property it goes through a proxy object/ interface/resource
// the proxy object handle all the crud logic and can be used to perform validations, logging and caching
// JS have inbuilt proxy class to achieve this pattern

type ITicket = {
    name: string,
    price: number,
    isCompleted: boolean
}

const ticketDetails: ITicket = {
    name: 'Kartik',
    price: 5000,
    isCompleted: false
}


const proxyObject = new Proxy(ticketDetails,{
    get<T extends keyof ITicket>(obj: ITicket, key: T){
        console.log(`Returning ${String(key)} from proxy object`);
        return obj[key];
    },
    set<T extends keyof ITicket>(obj: ITicket, key: T, value: ITicket[T]){
        if(key === 'name' || key === 'price'){
            console.log(`Can not update ${String(key)} after booking ticket`);
        }
        else{
            obj[key] = value;
        }
        return true;
    }
})

console.log(proxyObject);
proxyObject.isCompleted = true;
console.log(proxyObject);
proxyObject.name = 'K';
proxyObject.price = 0;
console.log(proxyObject);
