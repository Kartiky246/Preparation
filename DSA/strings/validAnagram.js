// find if two strings are anagram

const isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
 
    const charMap = new Map();
 
    for(let i of s){
        if(charMap.get(i)){
            charMap.set(i, charMap.get(i)+1)
        }
        else{
            charMap.set(i,1);
        }
    }
 
    for(let j of t){
        if(!charMap.get(j)) return false;
        charMap.set(j,charMap.get(j)-1);
        if(charMap.get(j)===0) charMap.delete(j)
    }
 
     return charMap.size ===0;
 
 };