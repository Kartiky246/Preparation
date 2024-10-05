// find the max sum of any possible subarray of an array
//https://leetcode.com/problems/maximum-subarray/description/

//Kaden's algorithim - )(n)
var maxSubArray = function(nums) {
  let sum = 0;
  let ans = -Infinity;
  for(let i =0; i<nums.length;i++){
      sum+=nums[i];
      ans = Math.max(ans,sum);
      if(sum<0) sum = 0;
  }
  return ans;
};