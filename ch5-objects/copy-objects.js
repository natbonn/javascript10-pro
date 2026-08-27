const initial = { 
    firstname: "Alice", 
    age: 30,
    address: { street: "Patision", streetNum: 80}
}

// Shallow copy
const copyObj = initial;
copyObj.firstname = 'Bob';
console.log(initial.firstname);

// Shallow copy με spread - side effects αν έχουμε object μέσα σε object
const copyInitial = { ...initial };
copyInitial.firstname = 'Bob'
copyInitial.address.street = 'Aristotelous'

console.log(initial.firstname)
console.log(initial.address.street)

// Deep copy
const copyInitial2 = JSON.parse(JSON.stringify(initial));

// Newest way of deep copy
const copyInitial3 = structuredClone(initial);