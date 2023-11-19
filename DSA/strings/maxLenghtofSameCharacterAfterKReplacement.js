// 424. Longest Repeating Character Replacement


const longestSubstringWithSameChar = (s,k) => {

    let maxLength =0;
    const frequencyArr = new Array(26).fill(0);
    let maxFrequencyValue = 0; 
    let startIndex =0;
    
    for(let endIndex =0; endIndex<s.length;endIndex++){
        const index = s[endIndex].charCodeAt(0) - 'A'.charCodeAt(0);
        frequencyArr[index]++;
        maxFrequencyValue = Math.max(maxFrequencyValue,frequencyArr[index]);

        if(endIndex-startIndex+1 - maxFrequencyValue >k){
            frequencyArr[s[startIndex].charCodeAt(0)-'A'.charCodeAt(0)]--;
            startIndex++;
        }
        maxLength = Math.max(maxLength,endIndex-startIndex+1);

    }
    return maxLength;

}

console.log(longestSubstringWithSameChar('ABAB',2))