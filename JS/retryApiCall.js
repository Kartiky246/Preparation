
const fetchData = async()=>{
    const res = await fetch('https://dummyjson.com/prducts');
    const data = await res.json();
    return data;
}



const retryApiCall = async (fun, noOfRetries=6,delay=3000)=>{
    let noOfAttempts = 0;
    while(noOfAttempts<noOfRetries){
        try {
            const res = await fun();
            console.log("res-",res);
            return res;
            
        } catch (error) {
            noOfAttempts++;
            console.warn(`Retrying api call ${noOfAttempts} times`);
            await new Promise((res,rej)=>setTimeout(()=>{res()},delay))
        }
    }
    if(noOfAttempts===noOfRetries){
        throw new Error(`Not able to call after ${noOfRetries} retries`);
    }
    
}

retryApiCall(fetchData)