// Μετατροπή δευτερολέπτων σε λεπτά και δευτερόλεπτα με Math.floor
const totalSeconds = 75;
const SECONDS_PER_MINUTE = 60;

const minutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE);
const seconds = totalSeconds % SECONDS_PER_MINUTE;

console.log(`${totalSeconds} seconds = ${minutes} min and ${seconds} sec`);
