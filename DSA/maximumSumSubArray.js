// find the max sum of any possible subarray of an array
const maxSubArray = function(nums) {
    let currSum = 0;
    let maxSum = nums[0]
 for(let i=0;i<nums.length;i++){
   currSum = Math.max(currSum+nums[i],nums[i])
   maxSum = Math.max(currSum,maxSum)
 }
 return maxSum
};