// Queue - FIFO - First-In-First-Out
const queue = [ 1, 2, 3, 4, 5 ];

queue.push(6);
console.log(queue);

const first = queue.shift();
console.log(first);
console.log(queue);