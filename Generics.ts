// Let’s say you have a function that needs to return the first element of an array. 
// Array can be of type either string or integer.

function getFirstElement(val : (string | number)[]){
    return val[0];
}
const returned =  getFirstElement(["abc", 1, "xyc"]);
console.log(returned.toLowerCase());

// Problems ->
// User can send different types of values in inputs, without any type errors
// Typescript isn’t able to infer the right type of the return type

// Solution -> Generics

function getFirstEl<T>(val : T[]){
    return val[0];
}

const r = getFirstEl(["abc", 123, "absdbnasjd"]);
console.log(r.toLowerCase());