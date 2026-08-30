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

// for arrays
function sumGrades(grades) {
    if (!Array.isArray(grades) || grades.length === 0) {
        return
    }
    // for .....
}

// Arrow Function -- Implicit & Explicit return
// First way - Implicit
const square = (n) => n * n      // υπονοείται curly braces & return - με μία παράμετρο δεν θέλει το (param)
console.log(square(5))

// Explicit return me {} & return
// Όχι απλό expression - όχι μία γραμμή 
const cube = (n) => {
    const result = n * n * n
    return result
}

// Implicit return of Object -- Wrap μέσα σε ({}) -- Αν είναι explicit only {}
const createUser = (username, role) => ({ username: username, role: role})



// Hoisting
console.log(hello('Alice'))     // καλούμε πριν ορίσουμε λόγω hoist

// hoisting function
function hello(name) {
    return `Hello ${name}`
}

// Expression ή arrow function NOT hoisting
console.log(hello2('Bob'))               // error - είναι και προφύλαξη 
const hello2= (name) => `Hello ${name}`  // προτιμότεροι οι 2 αυτοί τρόποι


// Callbacks συναρτήσεων
function processUser(username, callback) {
    console.log(`Processing data os user ${username}`)   // θέλει `` όχι ''
    callback(username)
}
// συνέχεια για εμφάνιση της callback
processUser('online-user', (user) => {
    console.log(`Data received for user ${user}`)
})

// Closures
function createCounter() {       // scope
    let count = 0                // private

    return function() {
        count++
        return count
    }
}

const myCounter = createCounter()  // συνεχίζει να υπάρχει - scope
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())