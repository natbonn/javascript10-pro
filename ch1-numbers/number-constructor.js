
// Number Constants
console.log("Min-Max Value: " + Number.MIN_VALUE + " - " + Number.MAX_VALUE);

console.log("Min-Max Safe Int: " + Number.MIN_SAFE_INTEGER + " - " + Number.MAX_SAFE_INTEGER);

// NaN
console.log("Is a string a number? " + Number("abc"));     // NaN

// Division by zero
console.log("Positive div by zero: " + (12 / 0));   // Infinity 
console.log("Positive div by zero: " + (-12 / 0));  // -Infinity

// Explicit Conversion
let num = Number("12");     // num -> 12
if(Number.isInteger(num)) {
    console.log("num is integer: " + Number.isInteger(num))
} else {
    console.log("Not an integer")
}

//