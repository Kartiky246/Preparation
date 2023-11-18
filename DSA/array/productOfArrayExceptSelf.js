// given an array return an array where each elements should be product of other items of the array

const productExceptSelf = function(nums) {
    const leftProduct =Array(nums.length).fill(0);
    const rightProduct = Array(nums.length).fill(0);
    const res = Array(nums.length).fill(0);

    // 1,2,3,4
    // 1,2,6,24
    // 24,24,12,4

    leftProduct[0]=nums[0];
    rightProduct[nums.length-1] = nums[nums.length-1];

    for(let i =1; i<nums.length;i++){
        leftProduct[i]= nums[i]*leftProduct[i-1];
    }

    for(let i =nums.length-2; i>=0;i--){
        rightProduct[i] = nums[i]*rightProduct[i+1]        
    }

    res[0] = rightProduct[1];
    res[nums.length-1] = leftProduct[nums.length-2];

    for(let i =1; i<nums.length-1;i++){
        res[i] = leftProduct[i-1] *rightProduct[i+1];
    }
    
    return res
};