// check if an array have two elements whice have a given sum
// https://leetcode.com/problems/two-sum/

//brute force
//TIME-COMPLEXITY = O(n^2)
//SPACE-COMPLEXITY = O(1) 

const arr = [2, 1, 6];
const sum = 3;

const givenSum = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return true
            }
        }
    }

    return false
}
// 
// console.log(givenSum(arr,4));


// optimize
//TIME-COMPLEXITY = O(n)
//SPACE-COMPLEXITY = O(n) 

const sumValue = (arr, s) => {
    const mySet = new Set;
    for (const item of arr) {
        if (mySet.has(s - item)) {
            return true
        }
        mySet.add(item)
    }
    return false;
}

console.log(sumValue(arr, 4));