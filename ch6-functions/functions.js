// 1. Basic Function Syntax - κάνει hoisting
function sayHello(name) {
    return `Hello ${name}`
}

console.log(sayHello('Alice'))

// 2. Function Expression
const add = function(a, b) {
    return a + b
}

console.log(add(3, 8))

// 3. Arrow Functions
const multiply = (a, b) => a * b;

console.log(multiply(4, 6))

// Optional Params - old way
function createButton(text, color) {
    color = color || 'blue'
    console.log(text, color)
}

createButton('Hello')             // Clear
createButton('Hello', '')         // θα είναι blue όχι clear

// Default Params  --  ES6
// Λειτουργούν ως overload
function createButton2(text, color = 'blue') {
    console.log(text, color)
}  

createButton2('Hello')            // Hello blue
createButton2('Hello', 'red')     // Hello red
createButton2('Hello', '')        // Hello


// Rest params
// let arr = [1, 2, 3, 4]
//  max(...arr)
// max(1, 2, 3, 4, 5)
function max(...numbers) {            // rest
// for (const num of numbers) {
//         // find max as usual
// }
    return Math.max(...numbers)        // spread
}

console.log(max(1, 2, 8, 3, 23, 17))  // 23

function calculateTotalPrice(discount, ...prices) {
   const totalPrice = prices.reduce((sum , price) => sum + price, 0)
   return totalPrice - discount
}

console.log(calculateTotalPrice(5, 10, 8, 30.7))

// Sanity checks στα input params των συναρτήσεων
// Έχουν νόημα μόνο αν εμείς δεν έχουμε πρόσβαση 
// στα input data - Public APIs, κλπ external data
const user = {
    id: 1,
    firstname: 'Alice',
    lastname: 'W.',
    hobbies: [ 'reading' ]
}

// Legacy
function getFirstHobby(user) {
    if (user && user.hobbies && Array.isArray(user.hobbies) && user.hobbies.length > 0 ) {
        return
    }
    return user.hobbies[0]
}

// Modern way
function getFirstHobby2(user) {
    return user?.hobbies?.[0] ?? 'no hobbies'
}