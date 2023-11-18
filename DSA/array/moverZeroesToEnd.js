
// move all the zeroes to the end
// https://leetcode.com/problems/move-zeroes/

const arr = [1, 3, 5, 2, 4, 50, 5, 0, 5, 0, 50, 33, 0, 3];


//Brute Force
//TIME-COMPLEXITY = O(n)
//SPACE-COMPLEXITY = O(n) 
const moveZerosToEnd = (arr) => {
    let noOfZeroes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            noOfZeroes++;
        }
    }

    const tempArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            tempArr.push(arr[i]);
        }
    }

    for (let i = 0; i < noOfZeroes; i++) {
        tempArr.push(0);
    }

    return tempArr;


}

// console.log(moveZerosToEnd(arr));

//Optimize
//TIME-COMPLEXITY = O(n)
//SPACE-COMPLEXITY = O(1) 

const moveZero = (arr) => {
    let pointer1 = 0
    let pointer2 = 0;

    while (pointer1 !== arr.length) {
        if (arr[pointer1] !== 0) {
            [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]]
            pointer2++;
        }
        pointer1++;
    }
    return arr;
}

console.log(moveZero(arr));