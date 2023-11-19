// longest substring without repeting character


var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let maxLength = 0;
    let startIndex=0;
    for(let endIndex=0; endIndex<s.length;endIndex++){
        if(map.has(s[endIndex])){
            startIndex = Math.max(startIndex,map.get(s[endIndex])+1);
        }
        map.set(s[endIndex],endIndex);
        maxLength = Math.max(maxLength,endIndex-startIndex+1);
    }
    return maxLength
};