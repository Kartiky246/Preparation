// in an array return true if every elemnt has unique frequency else return false

const uniqueFrequencyArray = (arr) =>{
    const frequencyMap = new Map();
    for(let i =0; i<arr.length; i++){
          frequencyMap.set(arr[i],frequencyMap.get(arr[i]) ? frequencyMap.get(arr[i]) + 1:1);
    }
    const occurenceSet = new Set(frequencyMap.values());
    return (occurenceSet.size===frequencyMap.size);
} 