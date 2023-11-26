

// Let’s say we have an array of functions and a value, the value has to be
// passed through these functions in a pipe. Like the initial value has to
// be passed to the first function and then the returned value from the
// first function has to be passed to the next function and so on.



// functions
const upperCase = (str) => {
    return str.toUpperCase();
    };

const reverse = (str) => {
return str.split('').reverse().join('');
};

const append = (str) => {
return "Hello " + str;
};


// array of functions to be piped
const arr = [upperCase, reverse, append];
    // initial value
const initialValue = "learnersbucket";