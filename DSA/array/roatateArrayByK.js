//https://leetcode.com/problems/rotate-array/description/

var rotate = function(nums, k) {
    k = k%nums.length
    const reverseArr = (arr,start,end) => {
        while(start<end){
            [arr[start],arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    reverseArr(nums,nums.length-k,nums.length-1);
    reverseArr(nums,0,nums.length-k-1);
    reverseArr(nums,0,nums.length-1);
};