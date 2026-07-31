const temperatures = [18, 21, 34, 55, 27, 33];
const LIMIT = 40;
let found = false;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > LIMIT) {
        found = true;
        console.log(`First temp over limit: ${temperatures[i]}`);
        break;
    }
}

if (!found) {
    console.log("No temp over limit");
}