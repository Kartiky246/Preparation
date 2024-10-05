//find max trapped rainwater between continer
// https://leetcode.com/problems/container-with-most-water/description/
//  Two pointer, O(n)


var maxArea = function(height) {
    let i =0;
    let j = height.length-1;
    let maxArr = 0;

    while(i<j){
       let area = (j-i)*Math.min(height[i],height[j]);
       maxArr = Math.max(maxArr,area);
       if(height[i]<height[j]){
           i++;
       }
       else if(height[i]>height[j]){
           j--;
       }
       else{
           i++;
           j--
       }

    }
    return maxArr;
};