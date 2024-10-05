//https://leetcode.com/problems/missing-number/description/

var missingNumber = function(nums) {
    let sum = 0;
    for(let i =0; i<nums.length; i++){
        sum+=nums[i];
    }
    return (nums.length*(nums.length+1))/2 - (sum)
};