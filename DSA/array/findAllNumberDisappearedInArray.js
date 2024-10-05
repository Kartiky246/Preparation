
//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

var findDisappearedNumbers = function(nums) {
    for(let i =0; i<nums.length; i++){
        const idx = Math.abs(nums[i]) - 1;
        if(nums[idx]>0){
            nums[idx] = -1*nums[idx];
        }
    }
    let ans = [];
    for(let i =0; i<nums.length;i++){
        if(nums[i]>0){
            ans.push(i+1);
        }
    }
    return ans;
};