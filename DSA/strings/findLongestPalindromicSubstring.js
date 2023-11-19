// give a string return it's longest palindromic substring
var longestPalindrome = function(s) {
  
    let start = 0;
   let end = 0;
   for(let i =0; i<s.length;i++){
       const len1 = lengthOfExpandedPalindrome(s,i,i);
       const len2 = lengthOfExpandedPalindrome(s,i,i+1);
       const len = Math.max(len1,len2);

       if (len > end - start) {

       start = i - Math.floor((len-1)/2);
       end = i + Math.floor(len/2);
       }
       
   }
   return s.substring(start,end+1);
};


const lengthOfExpandedPalindrome = (s,l,r) =>{
   let left = l;
   let right = r;
   while(left>=0 && right <s.length && s[left]===s[right]){
       left--;
       right++
   }
   return right-left-1;
}