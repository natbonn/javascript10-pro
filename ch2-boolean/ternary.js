const athensTemperature = 30;
const lamiaTemperature = 25;

const diff = athensTemperature - lamiaTemperature;
const absoluteDiff = diff < 0 ? -diff : diff;

console.log(`Absolute Diff is ${absoluteDiff}`)