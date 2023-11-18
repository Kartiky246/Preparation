var sorto12 = function(arr) {
    let i=0;
    let j =0;
    let k =arr.length-1;

    while(j<=k){
        if(arr[j]===0){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j++;
        }
          else if(arr[j]===1){
            j++;
        }
        else{
            [arr[j],arr[k]] = [arr[k],arr[j]]
            k--;
        }
    }

};