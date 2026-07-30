// Explicit Conversions
console.log("Boolean(1)" + Boolean(1));
console.log("Boolean(0)" + Boolean(0));
console.log("Boolean('')" + Boolean(''));
console.log("Boolean('Hello')" + Boolean('Hello'));

// Loop Conditions - Iterations - Coercions
while (1) {
    console.log("In WHILE")
    break;
}

do {
    console.log("Coding Factory")
} while(0);

for (let i = 1; 1; i++) {
    console.log("In for");
    break;
}