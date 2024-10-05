//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function(nums) {
    let idx =0;
    for(let i =1; i<nums.length;i++){
        if(nums[idx]!==nums[i]){
            idx++;
            nums[idx] = nums[i];
        }
    }
    return idx+1;
};