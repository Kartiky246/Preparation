// find the max product of any possible subarray of an array

var maxProduct = function(nums) {

    let leftProduct =1;
    let rightProduct = 1;
    let res = nums[0];

    for(let i =0; i<nums.length;i++){
        if(leftProduct===0){
            leftProduct =1;
        }
        if(rightProduct===0){
            rightProduct = 1;
        }
        leftProduct = leftProduct*nums[i];
        rightProduct = rightProduct*nums[nums.length-i-1];
        res = Math.max(res, Math.max(leftProduct,rightProduct));

    }
    return res;
    
};