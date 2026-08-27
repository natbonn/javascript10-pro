const initial = { 
    firstname: "Alice", 
    age: 30,
    address: { street: "Patision", streetNum: 80}
}

// Shallow copy με spreading - side effects αν έχουμε object μέσα σε object
const copyInitial = { ...initial };

// Deep copy
const copyInitial2 = JSON.parse(JSON.stringify(initial));

// Newest way of deep copy
const copyInitial3 = structuredClone(initial);