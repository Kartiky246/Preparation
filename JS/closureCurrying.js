/// return previous plus current argument sum


const outerFunc = () => {
    let ans = 0;
    return (i) => {
        ans+=i
        return ans
    }
}


const sum = outerFunc()

console.log(sum(1)) // =>1
console.log(sum(2)) // =>2
console.log(sum(5)) // => 8
console.log(sum(0)) // =>8