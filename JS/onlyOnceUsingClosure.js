let view;
let isSubscribe=false;
function subscribeTheChannel(){
    if(!isSubscribe){
    view = 'You have subscribed to MR. Perfect';
    console.log(view);
    isSubscribe = true;
    }
    else{
        console.log('can not subscribe multiple time');
    }
}

subscribeTheChannel()
subscribeTheChannel()
subscribeTheChannel()