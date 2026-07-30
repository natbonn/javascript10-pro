let dice;
let times = 0;

do {
    dice = Math.floor(Math.random() * 6) + 1
    times++;
    console.log(`Try ${times}: dice ${dice}`)
} while(dice !== 6);

console.log(`It took ${times} to get 6`)