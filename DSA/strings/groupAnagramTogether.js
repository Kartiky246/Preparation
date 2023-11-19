// group anagram together


var groupAnagrams = function(strs) {
    const anagramMap = new Map();
    const res = [];
    for(let i =0; i<strs.length;i++){
       const sortedStr = strs[i].split('').sort().join('');
       if(anagramMap.get(sortedStr)){
            const arr = anagramMap.get(sortedStr);
            arr.push(strs[i]);
           anagramMap.set(sortedStr,arr)
       }
       else{
           anagramMap.set(sortedStr,[strs[i]])
       }
    }
    return [...anagramMap.values()];
};