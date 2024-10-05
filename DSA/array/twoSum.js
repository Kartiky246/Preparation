//https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    const numberMap = new Map();
    for(let i =0; i<nums.length; i++){
        if(numberMap.has(target-nums[i])){
            return [i,numberMap.get(target-nums[i])]
        }
        numberMap.set(nums[i],i)
    }
    return [-1,-1]
};