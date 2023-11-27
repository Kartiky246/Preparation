// create a recursive custom deep clone method


const deepClone = (input) => {

    if(typeof input !=='object') return input;

    if(input instanceof Date){
        return new Date(input.getTime())
    }

    const copy = Array.isArray(input) ? [] : {};
    for(let key in input){
        const value = input[key];
        copy[key] = deepClone(value)
    }
    return copy
}