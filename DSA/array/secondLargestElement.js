// Find second largest element in array

//https://www.geeksforgeeks.org/problems/second-largest3735/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

getSecondLargest = (arr) => {
    // Code Here
    if(arr.length<2) return -1;
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let i =0; i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i]>secondLargest && arr[i]!==largest){
            secondLargest = arr[i];
        }
    }
    if(secondLargest === largest || secondLargest === -Infinity) return -1
    return secondLargest;
}