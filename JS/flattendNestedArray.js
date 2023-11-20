var flat = function (arr, n) {
    const res =[];
      function helper(arr,deep){
          for(let i =0; i<arr.length;i++){
              if(Array.isArray(arr[i]) && deep<n){
                    helper(arr[i],deep+1)
              }
              else{
                  res.push(arr[i])
              }
          }
          return res;
      }
     return helper(arr,0)
  };