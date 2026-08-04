const str1 = 'Hello';
const str2 = 'World';

// Equality
console.log(str1 === 'Hello');       // true
console.log(str1 === str2);          // false

console.log('Coding' < 'factory');   // true

if (str1.localeCompare(str2, 'el-GR') < 0) {
    console.log(str1 < str2)
} else if (str1.localeCompare(str2, 'el-GRF') > 0) {
    console.log(str1 > str2)
} else {   // str1.localeCompare(str2, 'el-GR) === 0 
    console.log('str1 equals str2');
}

const s1 = 'HELLO';
const s2 = 'hello';

if (s1.toUpperCase() === s2.toUpperCase()) {
    console.log('Strings are equal when case is ignored.')
}

if (s1.localeCompare(s2, 'el-GR', {sensitivity: 'base'}) === 0) {
    console.log('Strings are equal when case is ignored.')
}