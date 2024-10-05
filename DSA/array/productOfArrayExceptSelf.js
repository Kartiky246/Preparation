// given an array return an array where each elements should be product of other items of the array
//https://leetcode.com/problems/product-of-array-except-self/


var productExceptSelf = function(nums) {
    let leftProductArr = [];
    let leftProduct=1;
    let rightProduct = 1;
    let ans = [];
    for(let i =0; i<nums.length;i++){
        leftProduct*=nums[i];
        leftProductArr[i] = leftProduct;
    }
    for(let i =nums.length-1; i>-1; i--){
        if(i===nums.length-1){
            ans[i] = leftProductArr[i-1];
        } 
        else if(i===0){
            ans[i] = rightProduct 
        } 
        else{
            ans[i] = leftProductArr[i-1]*rightProduct;
        }
        rightProduct*=nums[i];
    }
    return ans;
};