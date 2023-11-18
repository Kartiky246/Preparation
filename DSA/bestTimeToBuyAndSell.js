// given an array the index represent day and value represnt stock price, tell the max profit that you can make


// TIME- O(n) , space - O(n)
var maxProfit = function(prices) {
    let maxProfit=0;
    const arr = [];
    let max = prices[prices.length-1];
  
      for(let i =prices.length-1; i>=0;i--){
          if(max<prices[i]){
              max = prices[i];
          }
          arr[i] = max;
      }
      for(let i =0; i<prices.length;i++){
          maxProfit = Math.max(arr[i]-prices[i],maxProfit)
      }
      return maxProfit;
  };

// TIME - O(n), SPACE - O(1)
  var maxProfit = function(prices) {
    let profit =0;
    let maxProfit =0;
    let buyIdx=0; 
    for(let i =0; i<prices.length;i++){
        if(prices[buyIdx]<prices[i]){
            profit = prices[i] - prices[buyIdx];
            maxProfit = Math.max(profit,maxProfit);
        }
        else{
            buyIdx=i;
        }
    }
    return maxProfit
  };