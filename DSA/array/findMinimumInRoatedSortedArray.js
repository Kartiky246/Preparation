// find minimum value in a rotated sorted array

var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;
    while(left<right){
        const mid = Math.floor((left+right)/2);
        if(nums[left]>nums[right]){
            left++;
        }
        else{
            right = mid;
        }
    }
    return nums[right] 
   };