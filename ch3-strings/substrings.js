let str = 'Coding Factory';

console.log(str.substring(1, 5));   // startIndex - endIndex -1 
console.log(str.slice(1, 5));       // same as first
console.log(str.slice(2));          // ding Factory
console.log(str.slice(-7));         // Factory

// split
let tokens = str.split(' ');
console.log(tokens);