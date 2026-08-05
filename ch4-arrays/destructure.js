const coordinates = [38.98, 23.33];

const [lat, lng] = [38.98, 23.33];   // array destructuring

console.log(lat);
console.log(lng);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, ...others] = numbers;  // rest pattern - collect remaining

console.log(others);

// Swap
let a = 10;
let b = 20;

[a, b] = [b, a];     // destructure
console.log('a=' + a);
console.log('b=' + b);