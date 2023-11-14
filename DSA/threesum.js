// Given an array return unique triplets such that some of these will be zero,
//  any particular triplet can not have repetive array element
// arr = [1,0,-1,-2] => [[1,1,-2]] can't be a vailid answer because a[0](1) is taken twice in the triplet
// triplets unique means - both [1,0,-1] and [-1,0,1] is same

// https://leetcode.com/problems/3sum/

// brute force
// TIME-COMPLEXITY - O(n^3)
// SPACE-COMPLEXITY - O(n) + O(n)


const arr = [-1, 0, 1, 2, -1, -4];

const threeSumBrute = (arr) => {
    const res = [];
    const uniqueTripletSet = new Set();
    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; j < arr.length - 2; j++) {
            for (let k = j + 1; k < arr.length - 1; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    const elements = [arr[i], arr[j], arr[k]].sort();
                    const stringifiedArr = JSON.stringify(elements);
                    if (!uniqueTripletSet.has(stringifiedArr)) {
                        res.push(elements);
                    }
                    uniqueTripletSet.add(JSON.stringify(elements));
                }
            }
        }
    }
    return res;
}

console.log(threeSumBrute(arr));


// optimized
// TIME-COMPLEXITY - O(n^2)*O(nLog(n))
// SPACE-COMPLEXITY - O(n) + O(n) + O(n)


const optimizedThreeSum = (arr) => {
    const res = [];
    const uniqueTripletSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        const target = -arr[i];
        const set = new Set();
        for (let j = i + 1; j < arr.length; j++) {
            if (set.has(target - arr[j])) {
                const elements = [arr[i], arr[j], (target - arr[j])].sort();
                if (!uniqueTripletSet.has(JSON.stringify(elements))) {
                    res.push(elements);
                }
                uniqueTripletSet.add(JSON.stringify(elements))

            }
            set.add(arr[j]);
        }
    }

    return res;
}

console.log(optimizedThreeSum(arr));


// instead of hashing is we sort and two pointers 
// TIME-COMPLEXITY - O(n^2)*O(nLog(n))
// SPACE-COMPLEXITY - O(n) + O(n) 
// to check the uniqueness of triplet is causing O(n) space and O(nLog(n)) times extra time


// Best way by striver
//Time-Complexoty - O(n^2)

const bestThreeSum = (arr) => {
    arr.sort((a, b) => a - b);
    const res = []
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue
        }
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            const sum = arr[i] + arr[j] + arr[k];
            if (sum < 0) {
                j++;
            }
            else if (sum > 0) {
                k--;
            }
            else {
                res.push([arr[i], arr[j], arr[k]]);
                while (arr[j] === arr[j + 1] && j < k) {
                    j++;
                }
                while (arr[k] === arr[k - 1] && j < k) {
                    k--;
                }
            }
            j++;
            k--
        }
    }

    return res;
}

console.log(bestThreeSum(arr));






