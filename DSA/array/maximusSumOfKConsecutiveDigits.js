// find the max sum of k Consecutive number in array

const maxSumKConsecutive = (arr,k) => {
    let currSum=0;
    let maxSum=0;

    for(let i =0; i<k;i++){
        currSum+=arr[i]
    }

    for(let i =k;i<arr.length;i++){
        currSum =  currSum + arr[k] - arr[i-k];
        maxSum = Math.max(currSum,maxSum);
    }
    return maxSum
}